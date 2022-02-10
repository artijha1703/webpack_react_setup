step 1 : npm init : generate package.json
step 2 : 
        install packages :
        1. React dependencies
        react : the js library
        react-dom : package with some method to manage dom element
        react-router-dom : package that contains the DOM bindings for React Router.
        2. webpack dependency (dev dependency)
        webpack : the bundler
        webpack-cli : CLI for webpack
        3. babel dependency for transpiling es6 to es5
        @babel/core : Babel compiler core
        @babel/preset-react :package that contains a set of plugins used to support React features.
step 3 : configure babel 
        1. creat babel.rc file
        2. add preset  - babel react
step 4 : install loader to pre process the file for webpack (dev dependency) . they are used to bundle static resources beyond js
        1. babel-loader: loader for Babel.
        2. html-laoder : loader for html
        3. css-loader : loader for css
        4. style-loader : loader that injects styles into dom
        5. sass-loader : loader for scss/ sass
        6. file-loader : loader for svg, png,jpeg,gif
step 5 : webpack plugins : to help with bundling (dev)
        1. html-webpack-plugins : this plugin is used to create HTML files that will serve bundles.
        2. MiniCssExtractPlugin (for prod build) : This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
        3. webpack-merge : to merge different webpack files
        4. clean-webpack-plugin : to help with removing the dist folder before build start.rom webpack v5, you can remove the clean-webpack-plugin plugin and use the output.clean option in your webpack config:
        5. optimize-css-assets-webpack-plugin (css-minimizer-webpack-plugin - webpack 5) : minimise and optimise the css by removing comments and minizying it. by default the js minifying works but when we add css minifier it overrides js minifyer , we need to add terser-webpack-plugin(by deafult with node)
        6. terser-webpack-plugin : minimise js (default node module to minify the js , replaces the uglify-webpack plugins)
        7. webpack-bundle-analyzer : Visualize size of webpack output files with an interactive zoomable treemap.
        8. 
step 6 : create html file template at root level with a div to serve the content
step 7 : create index.js and render the reactdom with  id as root
step 8 : package json script update for start and build
step 9:  use contenthash for cache busting , htmlwebpack plugin will insert script file name dyanmically in the body tag in template provided.
step 10: divide the webpack config into three config : common config , dev config(npm run start) , prod config (npm run build)