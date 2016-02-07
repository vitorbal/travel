// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Make webpack config
 * @param {Object} options Builder options
 * @param {boolean} options.BUILD Generate a build config
 * @returns {Object} Webpack configuration object
 */
module.exports = function makeWebpackConfig(options) {

    /**
     * Environment type
     * BUILD is for generating minified builds
     */
    var BUILD = !!options.BUILD;

    /**
     * Environment values
     */
    var NODE_ENV = process.env.NODE_ENV || 'development';

    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    /**
     * Entry
     */
    config.entry = {
        app: './app'
    };

    /**
     * Output
     */
    config.output = {
        // Absolute output directory
        path: __dirname + '/public',

        // Output path from the view of the page
        // Uses webpack-dev-server in development
        publicPath: BUILD ? '/' : 'http://localhost:8080/',

        // Filename for entry points
        // Only adds hash in build mode
        filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

        // Filename for non-entry points
        // Only adds hash in build mode
        chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    };

    /**
     * Devtool
     * Type of sourcemap to use
     */
    config.devtool = 'source-map';

    /**
     * Loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     */

    // Initialize module
    config.module = {
        preLoaders: [],
        loaders: []
    };

    // JS LOADER
    // Reference: https://github.com/babel/babel-loader
    // Transpile .js files using babel-loader
    var jsLoader = {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
            presets: ['es2015', 'react'],
            plugins: ['transform-runtime']
        }
    };

    // Add babel-plugin-react-transform when not in build mode
    // Reference: https://github.com/gaearon/babel-plugin-react-transform
    if (!BUILD) {
        jsLoader.query.plugins.push(['react-transform', {
            transforms: [{
                // Enable automatic hot reload of react components
                // Reference: https://github.com/gaearon/react-transform-hmr
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
            }, {
                // Catch errors inside of react component render function and show a screen
                // Reference: https://github.com/gaearon/react-transform-catch-errors
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
            }]
        }]);
    }

    // Add jsLoader to the loader list
    config.module.loaders.push(jsLoader);

    // LOCAL CSS LOADER

    // Identifier name for local css modules
    // Reference: https://github.com/webpack/css-loader#local-scope
    // More info: https://github.com/css-modules/css-modules
    const localIdentName = BUILD
        ? '[hash:base64]'
        : '[name]__[local]--[hash:base64:5]';

    // Reference: https://github.com/webpack/css-loader
    // Allow loading css through js and getting the className
    var localCssLoader = {
        test: /\.css$/,
        include: __dirname + '/app',
        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        // Extract css files in production builds
        loader: ExtractTextPlugin.extract(
            // Reference: https://github.com/webpack/style-loader
            // Use style-loader in development for hot-loading
            'style',

            // Reference: https://github.com/postcss/postcss-loader
            // Postprocess your css with PostCSS plugins
            'css?modules&sourceMap&localIdentName=' + localIdentName + '!postcss'
        )
    };

    // GLOBAL CSS LOADER
    // The same as localCssLoader, but imports are globals
    var globalCssLoader = {
        test: /\.css$/,
        include: __dirname + '/node_modules',
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    };

    // Add localCssLoader and globalCssLoader to the loader list
    config.module.loaders.push(localCssLoader, globalCssLoader);

    /**
     * PostCSS
     * Reference: https://github.com/postcss/autoprefixer-core
     * Add vendor prefixes to your css
     */
    config.postcss = [
        autoprefixer({ browsers: ['last 2 versions'] })
    ];

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [
        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        // Extract css files
        // Disabled when not in build mode
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD
        }),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#defineplugin
        // Replace process.env.NODE_ENV with NODE_ENV in code
        // Can be used to replace other values as well
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),

        // Reference: https://github.com/ampedandwired/html-webpack-plugin
        // Render index.html
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body'
        }),

        // Reference: https://github.com/webpack/webpack/issues/198#issuecomment-62014800
        // Prevent webpack of including all the optional locale modules of moment.js
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ];

    // Add build specific plugins
    if (BUILD) {
        config.plugins.push(
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
            // Only emit files when there are no errors
            new webpack.NoErrorsPlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
            // Dedupe modules in the output
            new webpack.optimize.DedupePlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    config.devServer = {
        contentBase: './public',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    };

    return config;
};
