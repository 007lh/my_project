const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports={
  mode:'development',
  devtool: 'eval-source-map',
  entry: [
        'webpack-dev-server/client?http://localhost:3000',
        //socket.io的client代码，这样它就能和webpack-dev-server建立的http server进行websocket通讯
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',//webpack中进行配置而不是使用npm script我们可以这样配置webpack的config文件。
        path.join(__dirname, 'src/index.js')
    ],
	output: {
		path: path.join(__dirname, './dist'),
		filename:'./bundle.js',
    publicPath: '/'
	},
	module: {
		rules: [  //loader的规则，loader的处理有一个优先级，从右到左、从下到上
			{
			  test: /.jsx$/,
			  loader: 'babel-loader'
			},
			{
			  test: /.(js)$/,
			  loader: 'babel-loader',
			  exclude: [  // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
				path.join(__dirname, './node_modules')
			  ]
      },
      {
        test: /.json$/, //使用loader的目标文件。这里是.json
        loader: 'json'
      },
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }
        ]
      },{
            test: /\.less$/,
            loader: "style!css!less"  // !的作用分割并串联；在loader中可以这样简写
      },{
            test:/\.jpg|png|jpeg|gif$/,
            use:['file-loader']
            }
				]
			},
	plugins: [
          new HtmlWebpackPlugin({
          template: './index.tmpl.html',
          inject: 'body',
          filename: './index.html'
        }),
        //new webpack.HotModuleReplacementPlugin()
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}
