# React &mdash; Proof of Concept

In this repository, I've implemented (or implementing) all the concepts related to React and its related technologies (like Redux, Context API & GraphQL). Please feel free to go through this repository for your own learning/revision as I'll be doing the same if I ever need to revise/reinforce my knowledge on React (or it's related technologies).

## Resources

- **[ReactJS Docs](https://reactjs.org/docs/getting-started.html)**
- **[MOOC by Andrei Neagoie & Yihua Zhang](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)**
- **[MOOC by Academind, taught by Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)**

## Child Repositories & Deployments

- Monsters Rolodex: **[GitHub Repo](https://github.com/Ch-sriram/monsters-rolodex)** & **[Live Deployment](https://ch-sriram.github.io/monsters-rolodex/)**

## Table of Contents

### React Basics [Making Monsters Rolodex Project] ⚛ + 👹

1. How to use `create-react-app` to initialize a react project: **[Tutorial here](https://create-react-app.dev/docs/getting-started/)** | **[Files that are added after first init](https://github.com/Ch-sriram/react/commit/2d7171fc2ed9630763add888d05055dd2c1b84cd)**
2. First Change in the React App: [Changes Made](https://github.com/Ch-sriram/react/commit/e4e33f5a09623ccadb2a2c81040f2a2cfc78edae)
3. Class Components, Initializing State in `constructor()` & Using `setState()` on an HTML Element in JSX: [Changes Made](https://github.com/Ch-sriram/react/commit/6ba9039e690b03f81d8626ca17838a3376668e4d)
4. Rendering a list of items in react using `key` prop: [Changes Made](https://github.com/Ch-sriram/react/commit/64cf86beee99dcc3457918be5e3240546dc68b57)
5. `props`, `props.children`, functional components, making new components & usage of `componentDidMount()` life-cycle method: [Changes Made](https://github.com/Ch-sriram/react/commit/3e55acecc9c12d8328047de7669a4532072a6294)
6. Sending state from one component to another, component nesting & reason why we use components: [Changes Made](https://github.com/Ch-sriram/react/commit/bbb046138407be5c45422966ffce22faac9563d1)
7. Handling DOM Events in JSX, Getting Data from User Input & `setState()`'s asynchronous behaviour: [Changes Made](https://github.com/Ch-sriram/react/commit/13265c1fbb5e4d90bb0f82e8ac5fbe4287de67b5)
8. Dynamic rendering of components due to `setState()` and `render()` methods: [Changes Made](https://github.com/Ch-sriram/react/commit/5a4d5970d90b1871b46c9cbc04c02d3a38560014)
9. Difference between `.js` and `.jsx` files, functional v. class components & destructuring props object as a parameter in a functional component: [Changes Made](https://github.com/Ch-sriram/react/commit/d4019dad916dcdd797e18b3dc3bf19660a5fbbd4)
10. Writing our own methods inside the App component & why are life-cycle defined normally like a function and not as an arrow function: [Changes Made](https://github.com/Ch-sriram/react/commit/0a7c9b5976d59cc669f9df698e9c8090ceda63cf)
11. Deploying a static app on GitHub Pages & Finishing Touches: **[Deploying Static Websites to GitHub Pages](https://github.com/Ch-sriram/react/wiki/Steps-for-Hosting-a-Static-Website-on-Github-Pages)**, **[Changes Made](https://github.com/Ch-sriram/react/commit/3250b1f3e7777041ff7f5eeb39ea6cb27fd724d9)** & **[Monsters Rolodex App Live Here](https://ch-sriram.github.io/monsters-rolodex/)**

### React Core Concepts ⚛❓

1. What does `create-react-app` command actually does? An in-depth understanding of `React` & `ReactDOM`: **[Commit Changes Here](https://github.com/Ch-sriram/react/commit/cec0bbd55d40359ad89cdb36431ad515683b080b)** & **[Basic File Structure for React Apps](https://github.com/Ch-sriram/react/wiki/Internal-details-of-%60create-react-app%60)**
2. Wrapping all the basics in one example &mdash; `props`, `props.children`, `setState()`, `state`, `React.Component`, `event-handling`, etc: [Commit Changes](https://github.com/Ch-sriram/react/commit/502f6498ae510a2f4f9587360ca5f7103162268c)
3. Using the `useState()` Hook for State Manipulation: [Commit Changes](https://github.com/Ch-sriram/react/commit/9fc62c6a1789475185a03fde1f3bbdea30eb6006)
4. Passing Method References b/w Components: [Commit Changes](https://github.com/Ch-sriram/react/commit/26932a76eddc8cae3dfcba44c1ff17cbca39257c)
5. Adding Two Way Binding: [Commit Details](https://github.com/Ch-sriram/react/commit/0beb8af51db9729c4d85fdca907c6fa25f17469e)
6. Styling Components - Inline Styling using JSX & Importing External Style Scripts: [Commit Details](https://github.com/Ch-sriram/react/commit/a99514cdf74aebffa8afbad61a5f6115965f6143)
7. Overall wrap-up of all the basics: **[Assignment Solution on CodeSandBox](https://codesandbox.io/s/modest-wu-n9k5w?file=/src/components/user-input/user-input.component.jsx)**

### Working with Lists & Conditionals 📜

1. Rendering Content Conditionally
   1. Using the ternary operator: [Commit Details](https://github.com/Ch-sriram/react/commit/5dc2b1ad364b6f8923eff44af488a93a5472684d)
   2. Using control flow `if-else` \[*recommended way*\]: [Commit Details](https://github.com/Ch-sriram/react/commit/d36965daf7737f04325c67d6fb9ce889d2d8f089)
2. Outputting Components in a List using `map()`: [Commit Details](https://github.com/Ch-sriram/react/commit/4b3d246804331808d6fbc9fb4ef077277e39cc8a)
3. Affecting `state` from a generated List of Components
   1. Updating State Directly (*flawed approach, can lead to unknown behaviour of the apps*): [Commit Details](https://github.com/Ch-sriram/react/commit/91c6424f4bdce8b71542c0a6cdb396475c6adff7)
   2. Updating State Immutably (correction to the flawed approach) using `splice()` or `...` [Spread Operator]: [Commit Details](https://github.com/Ch-sriram/react/commit/0936c2c3b540f808a7139ec400bfe1dbab9de76e)
4. Lists & Keys
   1. Usage of `key` prop: [Commit Details](https://github.com/Ch-sriram/react/commit/52235c6906dfd14d20103adb78378881ac2c6b2d)
   2. Making Lists Flexible w. `<input>` element inside the component: [Commit Details](https://github.com/Ch-sriram/react/commit/dd55f73a1ef6a0d44cc1b6a3bb33df31b357a47e)
5. Section wrap-up & Assignment: [My Solution @CodeSandBox](https://codesandbox.io/s/staging-morning-offcj?file=/src/App.js) & [Instructor's Solution @CodeSandBox](https://codesandbox.io/s/blissful-rosalind-fu2gm?file=/src/App.js)

### Styling React Components & Elements 🩰🎀👚

1. Setting Styles Dynamically: [Commit Details](https://github.com/Ch-sriram/react/commit/059ada885e7f271fbb75699f6c9d6cd474659971)
2. Setting Class Names Dynamically: [Commit Details](https://github.com/Ch-sriram/react/commit/c90a8f0b7d98099ceca69ad49345cbbbd7655da4)
3. Adding & Using **Radium** &mdash; `npm i --save radium`
   1. Implementing pseudo-classes like `:hover`: [Commit Details](https://github.com/Ch-sriram/react/commit/38a692d77d9a570af38d8a09f3749532ded7b50e)
   2. Implementing Media Queries `@media` using `{StyleRoot} from 'radium'`: [Commit Details](https://github.com/Ch-sriram/react/commit/74f0f476ae0005ddb5758b0211ac72d2be325e3a)
4. Adding & Using **[Styled Component](https://styled-components.com/)** &mdash; `npm i --save styled-components` 💄
   1. Styling components using **[Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)** with `styled-components` library: [Commit Details](https://github.com/Ch-sriram/react/commit/8ef490f993bd392b6476629545d2b0fc7e5eb32c)
   2. How `styled-components` library generates the CSS required for the respective component: [Commit Details](https://github.com/Ch-sriram/react/commit/d9129cd0692a88d143b3c76adb995b0033090da0)
   3. Dynamic styling with `props` inside a tagged template string: [Commit Details](https://github.com/Ch-sriram/react/commit/55bceb0995517afb22f04d569f308fb69d9d041b)
5. Working with CSS Modules
   1. Why do we need CSS Modules? [Commit Details](https://github.com/Ch-sriram/react/commit/bb869417d81ec0bf0eaa55ec6458165ad76a1080)
   2. Using CSS Modules: **[SETTINGS_README.md](https://github.com/Ch-sriram/react/blob/dev/react-examples/CSS_MODULES_SETTINGS_REACT_SCRIPTS_V1.md)** & [Commit Details](https://github.com/Ch-sriram/react/commit/d5f38daabc91f707bee2246bfb060ea8cbe59e76)
   3. Media Queries using CSS Modules: [Commit Details](https://github.com/Ch-sriram/react/commit/b430521e24e2caf066a59e0c98805b9b77caecb6)
6. Using `ErrorBoundaries` if an Error occurs in the react app, using `componentDidCatch(err, info)` method: [Commit Details](https://github.com/Ch-sriram/react/commit/9fe997867620c2cd2f0ddd5e675c40b125a4d33b) 🚫✅

### Deep Dive Into Components & React Internals 🏊🏾‍♂️⚛

1. A Better Project Directory Structure: [Commit Details](https://github.com/Ch-sriram/react/commit/e22fac77ab7417f37594b68f1aa1217b794d19e1)
2. Splitting an App into Components for cleaner structure/readability: [Commit Details](https://github.com/Ch-sriram/react/commit/13c56fe01c5b4b754951e1a1a839a0135f01c124)
3. Sending `props` to `<App/>` component: [Commit Details](https://github.com/Ch-sriram/react/commit/c579e1958d8f9d6b3e98aea53b8600af73c74cc8)
4. Component Creation Lifecycle in Action: [Commit Details](https://github.com/Ch-sriram/react/commit/9f703990f9a54c7fe1caeb7fe806cf9d3c07d553)
5. Component Update Lifecycle
   1. When `props` change: [Commit Details](https://github.com/Ch-sriram/react/commit/4dc01643a51e2456d42ba9b88d1956185e00bbe3)
   2. When `state` changes: [Commit Details](https://github.com/Ch-sriram/react/commit/d69afffa5c2ca4dec8f915f966c22a8d59ff6066)
6. `useEffect()` and its uses
   1. Usage inside a functional component: [Commit Details](https://github.com/Ch-sriram/react/commit/2c3f31c936f0fa3185ba6c7dffff1225b33d0d0b)
   2. Controlling the Behaviour of `useEffect()`: [Commit Details](https://github.com/Ch-sriram/react/commit/fe890d24d62d9948acc5807c5ca69a5017a94189)
7. Lifecycle Methods for Cleanup Work in class-based components using `componentWillUnmount()` & in functional components using `useEffect()`: [Commit Details](https://github.com/Ch-sriram/react/commit/5db978383c4e82130e1ba82752206a73e5049ebe)
8. Optimization in React
   1. Using Lifecycle Method - `shouldComponentUpdate()`: [Commit Details](https://github.com/Ch-sriram/react/commit/dcf7bb7d302ec04b29699dbe31fa616d9f4f123f)
   2. Using `React.memo()` for optimizing functional components: [Commit Details](https://github.com/Ch-sriram/react/commit/0b5aecceb6914057e212a9901131b54c180e63b5)
   3. Checking all the `props` info using `shouldComponentUpdate`: [Commit Details](https://github.com/Ch-sriram/react/commit/6dec77afa3170c223fc833adf04bd72ed34d3006)
   4. Extending `PureComponent` instead of defining `shouldComponentUpdate()` to check all the `props` manually: [Commit Details](https://github.com/Ch-sriram/react/commit/8efc19ec3559c40a96ac32e13588c3aa04f2e4ae)
9. Rendering Adjacent JSX Elements
   1. Using JS Arrays/Lists: [Commit Details](https://github.com/Ch-sriram/react/commit/a5cc7dc50d4a639981e4fd3e8db9541d89d40f73)
   2. Using a HOC (like say, `<Auxiliary />` component): [Commit Details](https://github.com/Ch-sriram/react/commit/849b614df6421fe6e9ac7534b5caf53482a28bb1)
   3. Using a built-in HOC for wrapping/rendering JSX elements &mdash; `<React.Fragment>`: [Commit Details](https://github.com/Ch-sriram/react/commit/90b069fc586be544e5a071d626a50bbb40830867)
10. Higher Order Components (HOC)
    1. Introduction to HOC: [Commit Details](https://github.com/Ch-sriram/react/commit/8a9645adc5ba6f86d24aaee6f988eae9a5f99ef7)
    2. Another form of HOC using Closure: [Commit Details](https://github.com/Ch-sriram/react/commit/208eda2591e9ade27f53878b107fddb6f139c05f)
    3. Passing Unknown `props` to HOC's using Closure: [Commit Details](https://github.com/Ch-sriram/react/commit/7f4ef6602745352ed89eba16e2ff97f44889f409)
11. Setting State Correctly: [Commit Details](https://github.com/Ch-sriram/react/commit/754d0e2224ca28708ca4c8cff59bad73aa4cbda9)
12. Using `PropTypes` &mdash; `npm i --save prop-types`: [Commit Details](https://github.com/Ch-sriram/react/commit/6daf605d993d4f12e6884362ae15c55f7556a67d)
13. `Refs` in React
    1. Why Refs? Introduction & Usage of `Refs` in class-based components (before React v16.3): [Commit Details](https://github.com/Ch-sriram/react/commit/f37d509963e34ba119da4b42366cc3e3c5fa14b9)
    2. Usage of `Refs` in class-based components (after React v16.3) using `React.createRef()`: [Commit Details](https://github.com/Ch-sriram/react/commit/8e4926d2695c6bcd6b4e2ce453cc6cd784119ffc)
    3. `Refs` in functional components using `useRef()` hook: [Commit Details](https://github.com/Ch-sriram/react/commit/9088c3ac9007c341cbc85b816ac57ec500ad6afa)
14. Context API in React
    1. Problems with `prop` chaining &mdash; Why use the concept of Context? [Commit Details](https://github.com/Ch-sriram/react/commit/be6a373389a4942902f261a988f46aefb5601122)
    2. Using the Context API using `React.createContext()`: [Commit Details](https://github.com/Ch-sriram/react/commit/04cbc679a15782256a93233bd77a54b38ce8be4f)
    3. Alternative way of using Context API in class-based components using `contextType` & Using functional components in functional components using `useContext()` hook: [Commit Details](https://github.com/Ch-sriram/react/commit/0e889f3bf143bdd16deafa0e370bc2b36f07a386)

### Reaching out to the Web (HTTP/AJAX) 🔁

Required Dependency: **`npm i --save axios`** | **[`axios` DOCS](https://github.com/axios/axios)** | API Endpoints: [/posts](https://jsonplaceholder.typicode.com/posts), [/posts/user_id](https://jsonplaceholder.typicode.com/posts/1)

1. Creating an HTTP Request to GET Data using `axios.get(url)` method: [Commit Details](https://github.com/Ch-sriram/react/commit/49f4acd91f0733b3d7ad6fd6e26833d0c3cf25d4)
2. Rendering Fetched Data to the View: [Commit Details](https://github.com/Ch-sriram/react/commit/c6dd030681debfbd65e24305986db453a21d67f7)
3. Transforming the Fetched Data to Limit the Components on the View: [Commit Details](https://github.com/Ch-sriram/react/commit/297ed57540e900b361b8288d10912a706a5241d0)
4. Making a Post Selectable: [Commit Details](https://github.com/Ch-sriram/react/commit/605b2fa308c400499249b723774e82a0f70b2e69)
5. Fetching Data on Update (w/o Creating Infinite Loops) in `componentDidUpdate()` lifecycle method: [Commit Details](https://github.com/Ch-sriram/react/commit/2b8b792c78972b1f75d831240b39cb9c2a21aa07)
6. POSTing Data to the Server using `axios.post(url, data, dataConfig)` method: [Commit Details](https://github.com/Ch-sriram/react/commit/16d5eb060d1f24ff6d8851bc09b6ebd999af7de3)
7. Sending a DELETE Request using `axios.delete(url)` method: [Commit Details](https://github.com/Ch-sriram/react/commit/4597b3f198bd10f30692c34526c15657cbe3619f)
8. Handling Errors Locally using `.catch(err)` method: [Commit Details](https://github.com/Ch-sriram/react/commit/1c8a87cc2b8549731c35fd4f36b9a9277f673e7a)
9. Adding Interceptors using `axios.interceptors` to Execute Code Globally: [Commit Details](https://github.com/Ch-sriram/react/commit/e72cb699a58b4e627a99567dcaa9ecbfcfef2626)
10. Setting a Default Global Configuration for Axios using `axios.defaults`: [Commit Details](https://github.com/Ch-sriram/react/commit/df370241d1f2ee2e54445986832521390b089108)
11. Creating and Using Axios Instance using `axios.create()` method: [Commit Details](https://github.com/Ch-sriram/react/commit/ce49f467fa69bb47660339882fb9307dd9db12e0)

### Single Page Applications with Routing &mdash; `react-router` 🔀

1. Setting Up Route Links in `<Blog />` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/b34b7005fb8bbee9ca9ef7b1cb4d475ce8f1b9f8)
2. Setting Up The Router Package **`npm i --save react-router react-router-dom`**: [Commit Details](https://github.com/Ch-sriram/react/commit/64ef82a4d09d2b0561861764c73a717fd754f4e4)
3. Preparing the Project for Routing &mdash; Making `<NewPost />`, `<FullPost />` & `<Posts />` Components as a Container for Proper Routing: [Commit Details](https://github.com/Ch-sriram/react/commit/e8d0a46e2892af940f600481cba861393dca051b)
4. Setting Up and Rendering Routes using `path`, `exact` & `render` attributes inside the `<Route />` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/0ae8809410db1d704c99ab3b61a7a6d8e906b0f2)
5. Rendering Components for Routes using `render` and `component` prop inside the `<Route />` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/9c39b5454c672cc7d8a1868190958d9ca9dca688)
6. Switching between Pages using Links
   1. *Inefficient Way to Re-route* &mdash; Entire Page Reloads using `<a href="/">Home</a>` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/c5ab53754f934db1ea3fd2dba86d4e6cf4f7e7e5)
   2. Efficient Way to Re-route &mdash; The Page Doesn't Reload using `<Link to="/">Home</Link>` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/1c46d5e9d96d8878e56aab1efe447ebe0f5aa905)
7. Using the Props (Routing Info) Sent to the Components Rendered from the `<Route />` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/7d5a80f3669e37434f5915977cd3df6c8ad0d7fd)
8. The `withRouter()` HOC & Route Props: [Commit Details](https://github.com/Ch-sriram/react/commit/f89ef0cbf6a77288b36bf0542c5b8dee95ca67b7)
9. Absolute vs. Relative Paths: [Commit Details](https://github.com/Ch-sriram/react/commit/f1cb5c5df16561fba48a0731e17b32e204822a60)
10. Styling the Active Route using `<NavLink to="<route>" exact activeClassName="<class-name>" activeStyle={<style-object>}/>` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/d226ec6c421c88c5e6818e2c85e531661d48582d)
11. Detecting Dynamic Routes using `<Route to="/:id" />` & Passing Route Parameters: [Commit Details](https://github.com/Ch-sriram/react/commit/8157484eae2c439ec84f841eb508ece07883f598)
12. Extracting Route Parameters using `this.props.match.params`: [Commit Details](https://github.com/Ch-sriram/react/commit/d2bfc5b210bc010f94e18a33361a9462c358eee4)
13. Using Unique Route Names to Load a Single Route: [Commit Details](https://github.com/Ch-sriram/react/commit/5cb6a33eb7706d3386c822836d16628d97601095)
14. Using `<Switch />` to Load a Single Route at a time: [Commit Details](https://github.com/Ch-sriram/react/commit/fa2ec6b5358db61cef2462327d61766083398c3c)
15. Navigating to Specified Routes Programmatically, using `this.props.history.push()` method, instead of using the `<Link />` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/1d439091176088876eda785d811593d5ddf96eeb)
16. **Understanding Nested Routes**
    1. Introduction & Usage: [Commit Details](https://github.com/Ch-sriram/react/commit/f9a93a7b773756f31cc02772588746c4285c7e91)
    2. Naming Routes Logically & Relative URLs in Nested Routes using `this.props.match.url`: [Commit Details](https://github.com/Ch-sriram/react/commit/5faaa2d3b40ecd75bb6a816e3c386b0d54e6bb0c)
    3. Creating Dynamic Nested Routes by Defining Proper Lifecycle Methods: [Commit Details](https://github.com/Ch-sriram/react/commit/f9b4e7deaed3486751da3aca5216130a5b75ade4)
17. **Redirecting Requests**
    1. Redirecting using the `<Route />` Component (*Not Recommended*): [Commit Details](https://github.com/Ch-sriram/react/commit/883bd3d5797ccdbc38ee9b18f10b139cffc8e73a)
    2. Redirecting using the `<Redirect from="<route-name>" to="<route-name>" />` Component inside a `<Switch />` Component (*Recommended*): [Commit Details](https://github.com/Ch-sriram/react/commit/7b26dc4e27547c24ce63d11be0df4fa4566a0900)
    3. Conditional Redirects using `<Redirect to="<route-name>"/>` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/585d6b6fa3e3e6821c17a4901587d7b566775420)
    4. Using `this.props.history.push()/replace()` to Redirect: [Commit Details](https://github.com/Ch-sriram/react/commit/c34bd8846f6916159ef4a6ca58849dab760ae060)
    5. Working with Navigation Guards: [Commit Details](https://github.com/Ch-sriram/react/commit/69cffe5d7ceceae4c7e3d1db90287978c1ea0740)
    6. Handling the **404 Not Found** Case using `path`less `<Route />`: [Commit Details](https://github.com/Ch-sriram/react/commit/643d0c2cc9a19a00207d34ce586c16609e1dae04)
    7. **Lazy Loading / Code Splitting** 😴 &mdash; 💥**Important**💥
       1. Loading Routes Lazily Using Asynchronous Dynamic `import()` method inside our own custom-made HOC: [Commit Details](https://github.com/Ch-sriram/react/commit/20387d909c7a69c80736eec746c2d07314314bdc)
       2. Lazy Loading Components Asynchronously with `React.lazy()` method & `<React.Suspense fallback={<div>Loading...</div>} />` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/a3479819461fbdf295298c873455d58e4890d520)
       3. Resolving Errors in `<NewPost />` Due to Lazy Loading &mdash; Wrapping `<NewPost />` with `withRouter()` HOC: [Commit Details](https://github.com/Ch-sriram/react/commit/4a61e837e39141865cfc8ae22475a176866e159f)
    8. Setting a `basename` prop for the `<BrowserRouter />` Component for Proper Routing & Server Deployment: [Commit Details](https://github.com/Ch-sriram/react/commit/9b38edf6b7e15fd88fa0bf55c41faf8606f41d7a)
18. Assignment Solution: **[My Solution @CodeSandBox](https://codesandbox.io/s/kind-mountain-0k5lv?file=/src/App.js)**, **[Instructor's Solution @CodeSandBox &mdash; v1](https://codesandbox.io/s/hopeful-wiles-ck7rw?file=/src/App.js)**

### State Management Using Redux (Basic Concepts) ♻⚛

**Dependency Installations: `npm i --save redux` | `npm i --save react-redux`**

1. **Understanding the Redux Flow** 🌊: **[Read @CodeSandBox](https://nw1ru.csb.app/)** | **[Image - Direct Link](https://i.ibb.co/nb0dCn0/Redux-Flow-Architecture.png)**
2. State Management With Redux Using Pure JS on Node Runtime &mdash; **`node <file-name>.js`**
   1. Setting Up **`Reducer`** & **`Store`**: [Commit Details](https://github.com/Ch-sriram/react/commit/886444703f0a01424115c2a3458092d2eb939c50)
   2. Dispatching **`Actions`** & Adding Logic for **`Actions`** in **`Reducer`**: [Commit Details](https://github.com/Ch-sriram/react/commit/0bc9671d9cff57d92029ae119a0c593b63a1eb62)
   3. Adding **`Subscriptions`**: [Commit Details](https://github.com/Ch-sriram/react/commit/1893a829d83081b0303fdbf7089ebbcfdcd8436c)
3. Integrating Redux into React ⚛🔌♻
   1. Setting Up Redux Before Connecting to React: [Commit Details](https://github.com/Ch-sriram/react/commit/f5fbd789c7955a909e96ae771a7dcbe4d2a05fe0)
   2. Connecting Redux **`STORE`** to React using `<Provider />` Component: [Commit Details](https://github.com/Ch-sriram/react/commit/73565b0333f41b05132cd6d7ae1a630840c3f3fa)
   3. Dispatching **`ACTIONs`** from within a React Component: [Commit Details](https://github.com/Ch-sriram/react/commit/084ebfea2ff011e37db2f7232d5e1792f6a4865a) | **[Assignment Solution @CodeSandBox](https://codesandbox.io/s/angry-galileo-85ptp?file=/src/containers/Counter/Counter.js)** | **[Commit Details for Assignment](https://github.com/Ch-sriram/react/commit/3503e30759d57a3ab8998386c5aa2022d79fbe6c)**
4. Handling Redux **`STORE`**
   1. Updating State Immutably: [Commit Details](https://github.com/Ch-sriram/react/commit/95ce922e1d36a5941d983796b0ef1e97d3b40fd0)
   2. Updating Arrays in the State Immutably: [Commit Details](https://github.com/Ch-sriram/react/commit/f03d888b21948131a842f0240fc71afb3eb4a756)
5. Outsourcing **`ACTION`** Types: [Commit Details](https://github.com/Ch-sriram/react/commit/5d9e9976388d82f53d67bf984130e8788376069a)
6. Combining Multiple **`REDUCERS`**: [Commit Details](https://github.com/Ch-sriram/react/commit/a9b41770ebb6d013e4cb7b9758989cc4bf4d4743)
7. **Redux Basics Assignment**: **[Solution @CodeSandBox](https://codesandbox.io/s/patient-thunder-12hlx?file=/src/App.js)** & [Commit Details](https://github.com/Ch-sriram/react/commit/aabf655b7495bc8c1d0e2bcf4619364b1ab9d543)
8. Combining Local UI **`state`** & Redux **`STORE`**: [Commit Details](https://github.com/Ch-sriram/react/commit/fcd34668a30e6681087bdd6177f480728f78f68c)

### State Management Using Redux (Advanced Concepts) ♻⚛

1. What is **`MIDDLEWARE`** && Adding **`Middleware`** In Practice using `applyMiddleware()` function: **[Read @CodeSandBox](https://e1x2d.csb.app/)** & [Commit Details](https://github.com/Ch-sriram/react/commit/2b7c3f0518da67b71387d698dd319545ad060826)
2. Using the **[Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)**: **[Setting Up Redux STORE for Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup)** & [Commit Details](https://github.com/Ch-sriram/react/commit/11b0b77cc0dbf1776e142f7501eed9d32092a82d)
3. Introduction & Usage of **`ACTION Creators`**: [Commit Details](https://github.com/Ch-sriram/react/commit/486ed0118bdd8479b168e03103d9e6fe3417d948)
4. Handling Asynchronous Code using **[`redux-thunk`](https://github.com/reduxjs/redux-thunk)** &mdash; **`npm i --save redux-thunk`**: [Commit Details](https://github.com/Ch-sriram/react/commit/35759d6fabdf474b2a451f5cfebd959fbe8fd467)
5. Restructuring **`ACTIONS`**: [Commit Details](https://github.com/Ch-sriram/react/commit/cf8c0dbdb42dea88c022fb6959a876d7f6275d18)
6. Where to Put Data Transforming Logic? [Commit Details]()
