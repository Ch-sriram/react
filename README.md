# React &mdash; Proof of Concept

In this repository, I've implemented (or implementing) all the concepts related to React and its related technologies (like Redux, Context API & GraphQL) through making an E-commerce website. Please feel free to go through this repository for your own learning/revision as I'll be doing the same if I ever need to revise/reinforce my knowledge on React (or it's related technologies).

## Resources

- **[ReactJS Docs](https://reactjs.org/docs/getting-started.html)**
- **[MOOC by Andrei Neagoie & Yihua Zhang](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)**

## Child Repositories & Deployments

- Monsters Rolodex: **[GitHub Repo](https://github.com/Ch-sriram/monsters-rolodex)** & **[Live Deployment](https://ch-sriram.github.io/monsters-rolodex/)**

## Table of Contents

#### React Basics (Making Monsters Rolodex Project)

1. How to use `create-react-app` to initialize a react project: **[tutorial here](https://github.com/Ch-sriram/react/tree/2d7171fc2ed9630763add888d05055dd2c1b84cd)** | Important files after first init: **[App.js](https://github.com/Ch-sriram/react/blob/2d7171fc2ed9630763add888d05055dd2c1b84cd/monsters-rolodex/src/App.js)** & **[index.js](https://github.com/Ch-sriram/react/blob/2d7171fc2ed9630763add888d05055dd2c1b84cd/monsters-rolodex/src/index.js)**
2. First Change in the React App: [App.js](https://github.com/Ch-sriram/react/blob/e4e33f5a09623ccadb2a2c81040f2a2cfc78edae/monsters-rolodex/src/App.js)
3. Class Components, Initializing State in `constructor()` & Using `setState()` on an HTML Element in JSX: [App.js](https://github.com/Ch-sriram/react/blob/6ba9039e690b03f81d8626ca17838a3376668e4d/monsters-rolodex/src/App.js)
4. Rendering a list of items in react using `key` prop: [App.js](https://github.com/Ch-sriram/react/blob/64cf86beee99dcc3457918be5e3240546dc68b57/monsters-rolodex/src/App.js)
5. `props`, `props.children`, functional components, making new components & usage of `componentDidMount()` life-cycle method: [Changes Made](https://github.com/Ch-sriram/react/commit/3e55acecc9c12d8328047de7669a4532072a6294https://github.com/Ch-sriram/react/commit/3e55acecc9c12d8328047de7669a4532072a6294), [App.js](https://github.com/Ch-sriram/react/blob/3e55acecc9c12d8328047de7669a4532072a6294/monsters-rolodex/src/App.js), [./components/card-list/card-list.component.jsx](https://github.com/Ch-sriram/react/blob/3e55acecc9c12d8328047de7669a4532072a6294/monsters-rolodex/src/components/card-list/card-list.component.jsx) & [./components/card-list/card-list.styles.css](https://github.com/Ch-sriram/react/blob/3e55acecc9c12d8328047de7669a4532072a6294/monsters-rolodex/src/components/card-list/card-list.styles.css)
6. Sending state from one component to another, component nesting & reason why we use components: [Changes Made](https://github.com/Ch-sriram/react/commit/bbb046138407be5c45422966ffce22faac9563d1), [App.js](https://github.com/Ch-sriram/react/blob/bbb046138407be5c45422966ffce22faac9563d1/monsters-rolodex/src/App.js), [./components/card/card.component.jsx](https://github.com/Ch-sriram/react/blob/bbb046138407be5c45422966ffce22faac9563d1/monsters-rolodex/src/components/card/card.component.jsx) & [./components/card/card.styles.css](https://github.com/Ch-sriram/react/blob/bbb046138407be5c45422966ffce22faac9563d1/monsters-rolodex/src/components/card/card.styles.css)
7. Handling DOM Events in JSX, Getting Data from User Input & `setState()`'s asynchronous behaviour: [Changes Made](https://github.com/Ch-sriram/react/commit/13265c1fbb5e4d90bb0f82e8ac5fbe4287de67b5) & [App.js](https://github.com/Ch-sriram/react/blob/13265c1fbb5e4d90bb0f82e8ac5fbe4287de67b5/monsters-rolodex/src/App.js)
8. Dynamic rendering of components due to `setState()` and `render()` methods: [Changes Made](https://github.com/Ch-sriram/react/commit/5a4d5970d90b1871b46c9cbc04c02d3a38560014) & [App.js](https://github.com/Ch-sriram/react/blob/5a4d5970d90b1871b46c9cbc04c02d3a38560014/monsters-rolodex/src/App.js)
9. Difference between `.js` and `.jsx` files, functional v. class components & destructuring props object as a parameter in a functional component: [Changes Made](https://github.com/Ch-sriram/react/commit/d4019dad916dcdd797e18b3dc3bf19660a5fbbd4), [App.js](https://github.com/Ch-sriram/react/blob/d4019dad916dcdd797e18b3dc3bf19660a5fbbd4/monsters-rolodex/src/App.js) & [./components/card/card.component.jsx](https://github.com/Ch-sriram/react/blob/d4019dad916dcdd797e18b3dc3bf19660a5fbbd4/monsters-rolodex/src/components/card/card.component.jsx)
10. Added a new component: [Changes Made](https://github.com/Ch-sriram/react/commit/7be007cfb669c29cd9c246c5b7baa55a0b615e0d), [./components/search-box/search-box.component.jsx](https://github.com/Ch-sriram/react/blob/7be007cfb669c29cd9c246c5b7baa55a0b615e0d/monsters-rolodex/src/components/search-box/search-box.component.jsx) & [./components/search-box/search-box.styles.css](https://github.com/Ch-sriram/react/blob/7be007cfb669c29cd9c246c5b7baa55a0b615e0d/monsters-rolodex/src/components/search-box/search-box.styles.css)
11. Writing our own methods inside the App component & why are life-cycle defined normally like a function and not as an arrow function: [Changes Made](https://github.com/Ch-sriram/react/commit/0a7c9b5976d59cc669f9df698e9c8090ceda63cf) & [App.js](https://github.com/Ch-sriram/react/blob/0a7c9b5976d59cc669f9df698e9c8090ceda63cf/monsters-rolodex/src/App.js)