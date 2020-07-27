# Webpack Configuration Settings For Enabling CSS Modules When Using `react-scripts@v1.0`

These are step-by-step instructions to enable CSS modules in a react application with `react-scripts@v1.0+`

**Note**: These settings don't need to be applied if the `react-scripts` version is above 2.0

1. Stop the dev-server service and run the command - `npm run eject` in your react project directory. The command will eject the underlying configurations and give access to the programmer to manipulate those configurations on our whim.
2. After that command is executed, we will see that we gain access to a directory named `config` in which we will be able to see another directory called `jest`, inside which, we'll find 2 files, `webpack.config.dev.js` and `webpack.config.prod.js` in which we will see the configurations that bundle, polyfill & give us the development server to build our app. In both the aforementioned files -  `webpack.config.dev.js` & `webpack.config.prod.js`, we should be careful about tweaking any settings that can break the entire app, and only tweak those settings which we know how to tweak.
3. For our needs, there is one specific property that we would change/modify, and that's `test: /\.css$/`, in which we'll modify the `options` object as the following:

<pre>
{
  test: /\.css$/
  use: [
    require.resolved('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      },
    },
  ]
}
</pre>

4. The only additions made would be the properties `options.modules` and `options.localIdentName` in both the files mentioned in point 2. After that, when we re-run our dev-server using `npm start`, we should be able to run our app without any problem.

Now, because of these settings, we can import the `App.css` file into a React component as JavaScript object. See the example in this **[Commit](https://github.com/Ch-sriram/react/commit/d5f38daabc91f707bee2246bfb060ea8cbe59e76)** for more details.

**NOTE**: In case if your react app is already using `react-scripts` v2.0 or greater, then we need not do all of these manual webpack configuration settings. We just need to import each and every CSS file as follows:

<pre>
import PersonsCSSRules from './Persons.module.css';
</pre>

Note that we also have to rename `Persons.css` to `Persons.module.css` to make sure that the above import works properly.
