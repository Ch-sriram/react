# React &mdash; Proof of Concept

In this repository, I've implemented (or implementing) all the concepts related to React and its related technologies (like Redux, Context API & GraphQL). Please feel free to go through this repository for your own learning/revision as I'll be doing the same if I ever need to revise/reinforce my knowledge on React (or it's related technologies).

## Resources

- **[ReactJS Docs](https://reactjs.org/docs/getting-started.html)**
- **[MOOC by Andrei Neagoie & Yihua Zhang](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)**
- **[MOOC by Academind, taught by Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)**

## Child Repositories & Deployments

- Monsters Rolodex: **[GitHub Repo](https://github.com/Ch-sriram/monsters-rolodex)** & **[Live Deployment](https://ch-sriram.github.io/monsters-rolodex/)**

## Table of Contents

### React Basics [Making Monsters Rolodex Project]

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

### React Core Concepts

1. What does `create-react-app` command actually does? An in-depth understanding of `React` & `ReactDOM`: **[Commit Changes Here](https://github.com/Ch-sriram/react/commit/cec0bbd55d40359ad89cdb36431ad515683b080b)** & **[Basic File Structure for React Apps](https://github.com/Ch-sriram/react/wiki/Internal-details-of-%60create-react-app%60)**
2. Wrapping all the basics in one example &mdash; `props`, `props.children`, `setState()`, `state`, `React.Component`, `event-handling`, etc: [Commit Changes](https://github.com/Ch-sriram/react/commit/502f6498ae510a2f4f9587360ca5f7103162268c)
3. Using the `useState()` Hook for State Manipulation: [Commit Changes](https://github.com/Ch-sriram/react/commit/9fc62c6a1789475185a03fde1f3bbdea30eb6006)
4. Passing Method References b/w Components: [Commit Changes](https://github.com/Ch-sriram/react/commit/26932a76eddc8cae3dfcba44c1ff17cbca39257c)
5. Adding Two Way Binding: [Commit Details](https://github.com/Ch-sriram/react/commit/0beb8af51db9729c4d85fdca907c6fa25f17469e)
6. Styling Components - Inline Styling using JSX & Importing External Style Scripts: [Commit Details](https://github.com/Ch-sriram/react/commit/a99514cdf74aebffa8afbad61a5f6115965f6143)
7. Overall wrap-up of all the basics: **[Assignment Solution on CodeSandBox](https://codesandbox.io/s/modest-wu-n9k5w?file=/src/components/user-input/user-input.component.jsx)**

### Working with Lists & Conditionals

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
5. Section wrap-up & Assignment: [My Solution @CodeSandBox](https://codesandbox.io/s/staging-morning-offcj?file=/src/App.js)
