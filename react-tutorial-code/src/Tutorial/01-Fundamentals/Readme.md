#### What Is React?

-React is an open-source JavaScript library used to build user interface (UI) components on single-page applications. it depends on the components, It's considered one of the most popular libraries for building user interfaces (UI) in the world

#### Why Is React So Popular?

To help you better understand what drives the popularity of React, here are some of its most important features and benefits.

# Components

Components are the core building blocks of React, the UI of every application built with React can be broken down into individual pieces called components that are independent of one another. Each of these components has its own logic and can be edited separately before being merged together in the final UI, which makes the task of creating an application’s UI simpler and easier to manage. Components can also be reused on other pages and applications, which saves a considerable amount of time on coding.
Always think of the component as a javascript function.

# The Virtual DOM

The DOM (Document Object Model) is a tree-like model that represents how user interface (UI) objects on a website are organized. Prior to React, the DOM had to be re-rendered every time there was a change to an application’s UI, which hindered site responsiveness.

One of the most useful features of React is its ability to change components on a website without having to update the entire DOM. This is accomplished through the virtual DOM, which is a virtual representation or copy of the DOM. Whenever a user takes action, like clicking a button, React updates the virtual DOM, compares the update to the previous version, detects the differences, then only updates the affected objects instead of refreshing the entire DOM. This makes the site faster, more responsive, and improves its performance.

# JSX

JSX, which stands for JavaScript XML, is a syntax extension of JavaScript that allows programmers to structure components using language similar to HTML embedded within JavaScript code. JSX is typically used to describe what a site’s UI should look like, which React then transforms into DOM elements. While JSX is not required to create React applications, it does speed up programming by simplifying the coding language.

#### How To Learn React

Prerequisites for Learning React
Before you try your hand at learning React, it’s important to understand the fundamentals of web development including foundational languages like HTML, CSS, and JavaScript. if you understand those foundational languages you can start learning react

### And Let's Starting To Create Our First React App

to create simple react app you can using one of this

1- npx create-react-app (you'r app name)

2-npm create vite@latest (you'r app name) -- --template react

### React App Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json

- public
  in Public folder you fine SVG img remove it, you don't need it anyway

- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.

- .gitignore
  Specifies which files source control (Git) should ignore

- index.html (page template)

  - title
  - fonts
  - css
  - favicon
  - id="root" - our entire app

- package.json
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependency tree

#### The Best Folder Structure for React Project (from my point of view)

# Assets Folder

As the name says, it contains assets of our project. It consists of images and styling files. Here we can store our global styles. We are centralizing the project so we can store the page-based or component-based styles over here. But we can even keep style according to the pages folder or component folder also. But that depends on developer comfortability.

# Layouts Folder

As the name says, it contains layouts available to the whole project like header, footer, etc. We can store the header, footer, or sidebar code here and call it.

# Components Folder

Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project. Each component should consist of a test file to do a unit test as it will be widely used in the project.

# Pages Folder

The files in the pages folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its sub folder. Each page has its state and is usually used to call an sync operation. It usually consists of various components grouped.

# Middle ware Folder

This folder consists of middle ware that allows for side effects in the application. It is used when we are using reduce with it. Here we keep all our custom middle ware.

# Routes Folder

This folder consists of all routes of the application. It consists of private, protected, and all types of routes. Here we can even call our sub-route.

# Config Folder

This folder consists of a configuration file where we store environment variables in config.js. We will use this file to set up multi-environment configurations in your application.

# Services Folder

This folder will be added if we use redux in your project. Inside it, there are 3 folders named actions, reducers, and constant subfolders to manage states. The actions and reducers will be called in almost all the pages, so create actions, reducers & constants according to pages name.

# Utils Folder

Utils folder consists of some repeatedly used functions that are commonly used in the project. It should contain only common js functions & objects like dropdown options, regex condition, data formatting, etc.

<!-- xXx -->
<!-- start with react fundamentals -->

#### Now Let's Start Our React Fundamentals

### Remove Boilerplate

- remove all files in src, but just keeping on App.jsx and main.jsx

### Nots

- Component are js file contains (jsx) javascript xml, html with javascript

- Always think of the component as a javascript function.

- Component file is javascript file

#### First Component

We have two ways to create components in React

- Function Component
- Class Component

# Function Component

1- jsx component it can be (regular js function or arrow function)

```js
function Greeting() {
  return (
    <div className='parent'>
      <h2 className='main-title'>My First Component</h2>
    </div>
  )
}

// arrow function also works

const Greeting = () => {
  return (
    <div className='parent'>
      <h2 className='main-title'>My First Component</h2>
    </div>
  )
}
```

# JSX Component Rules

- starts with capital letter
- must return JSX (javascript xml) (html)
- close every element
- attributes are written in CamelCase <div className=""></div>
- must return at least one element
- return single element (one parent element)
  if you return more than one element you should have one parent element contains all you'r elements

2-react create element

```js
function Greeting() {
  return React.createElement(
    'div',
    { className: 'my-div', id: 'unique-id' },
    React.createElement('h1', {}, 'React Create Element Component')
  )
}
```

create react element is a function, it's take three parameters

- which element you need created
- an object contains all you'r element attributes
- the another element or text you need add inside the main element (first parameter)

#### CSS In React

to use CSS in react, you have two ways

1- create CSS file like app.css, and import it in you'r component like in app.jsx
by this way you can create CSS file for every component

- create app.css in src

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.section-container {
  padding: 4rem 0;
  margin: 0 auto;
  max-width: 1320px;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}
```

- import file and add classes

```js
import './app.css'

function Greeting() {
  return (
    <div className='section-container'>
      <h1>our first component</h1>
    </div>
  )
}
```

2-Write css in jsx style,called jsx css, is close to writing inline css in an html file

```js
const Greeting = () => (
  <h1 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    our first component
  </h1>
)
```

- alternative option
  you can create object contains all element style

```js
const Greeting = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h1 style={inlineHeadingStyles}>our first component</h1>
}
```

### Nest Components

you can including component in another component

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>john doe</h2>

const Message = () => {
  return <p>this is my message</p>
}
```

### Images In React

- images in react it can be from outer source, in this case you need just passing the url to src attribute

```js
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
    alt='Interesting Facts For Curious Minds'
  />
)
```

- it can be in folder in public folder,
  in this case you need passing the extension for image to src attribute
  local images (public folder) - less performance

```js
const Image = () => (
  <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
)
```

- it can be in folder (assets) in src folder,
  in this case you need import image from the assets folder and passing the import extension to src attribute
  local images (src folder) - better solution for performance,

```js
import logoImg from '../assets/images/logo.svg'
const Image = () => <img src={logoImg} alt='logo image' />
```

### Return To JSX

- {} in JSX means going back to JS Land
- value inside must be an expression (return value),
  can't be a statement

```js
const quote = 'life has become very difficult'

const Book = () => {
  const author = 'no one'

  return (
    <article>
      <h2>{quote}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  )
}
```

### Props In React - Initial Setup

- Props are the main backbone of React, it is one of the basic features that made React awesome and powerful. Props in React are used for one-way (passing from down Or from up to down)and bidirectional way (passing from up to down ,and vice versa) communication in React components.

- Think of props as arguments to functions. Functions in JS are a group of codes that perform a task.

- props using to passing data between component

- props are an object contains all value you passing to component as html attribute

```js
const name = 'Adam'
const PersonList = () => {
  return <Person name={name} age={25} />
}

const Person = (props) => {
  const { name, age } = props
  return (
    <div>
      <h2>{name}</h2>
      <h4>{age}</h4>
    </div>
  )
}
```

### Passing Function to React Component

- This may seem a bit complex, but yes, we can actually pass a function via props to a component.

- Most function props are used to communicate data from a child component to a parent component.

### Default Props in React

- Default props are props that the Component will fallback to when the props are not passed to the component.

- Think of default props as default values set on an argument in a function.

in this article you find best definition for prop in react
[React Props Explained with Examples](https://refine.dev/blog/react-props/#introduction)

### Children Props

With children's props you can reach anything in between closing tag and opening tag of the component

- Everything we render between component tags
- special prop, has to be "children"
- can place anywhere in JSX

```js
const name = 'Adam'
const PersonList = () => {
  return (
    <Person name={name} age={25}>
      <p>more info about props</p>
      <button>click</button>
    </Person>
  )
}

const Person = (props) => {
  const { name, age, children } = props
  return (
    <div>
      <h2>{name}</h2>
      <h4>{age}</h4>
      {children}
    </div>
  )
}
```

#### State vs Props

- Props as we know are passed to components, and from one component to another. State on the other hand is not passed from one component to the other, it is passed within the component only. The state is local data used and maintained by one component only. Two components cannot use or maintain one state.

- Props are immutable, which means that they cannot be modified. Once a props is passed to a component, that component cannot change the value of the props. State on the reverse is mutable. States can be changed at will in the component.

- So props are read-only while states are read-and-write. Props are used for communication uni-directional or bi-directional, while the state is used to render dynamic data in the component.

#### List Rendering In React

If we are working on any React project we have to play with arrays and objects for data. Arrays are used to store multiple data into a single variable and objects are a collection of properties which is an association between a key and value. So both play an important role in the creation of an application.

in this article, you find best definition for list rendering in react
[ReactJS Lists](https://www.geeksforgeeks.org/reactjs-lists/)

<!-- xXx -->

In this article, you’ll outline some problems associated with bloated list
[render large lists react five methods examples](https://blog.logrocket.com/render-large-lists-react-5-methods-examples/)

# Key Warning

When we iterate over the list in React, we will get an error saying:

<!-- Warning: Each Child in a list should have a unique "key" prop -->

- A key is a special attribute you need to include when creating lists of elements in React.

- A key, It must be a unique value, which is also a reserved word

- Keys are used in React to identify which items in the list are changed, updated, or deleted.

in this article, you find best definition for keys in react
[ReactJS Keys](https://www.geeksforgeeks.org/reactjs-keys/)

```js
function list({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className='post'>
          <h3>
            {item.title} - {item.id}
          </h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}
```

### Events In React

Handling events is a crucial part of building web applications. Events can be triggered by user actions such as clicking a button or typing in an input field. React provides a simple and efficient way to handle events by using event listeners.

Event names are written in camelCase, so the onclick event is written as onClick in a React

```js
function ActionLink() {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('The link was clicked.')
  }

  return <button onClick={handleClick}>Click me</button>
}
```

The React onClick event handler enables you to call a function and trigger an action when a user clicks an element, such as a button, in your app.

[React Basics Handling Events](https://dev.to/sidramaqbool/handling-events-in-react-with-best-practices-and-examples-1d75),(https://blog.logrocket.com/react-onclick-event-handlers-guide/)

<!-- xXx  -->

in this article we will learn who Using custom events in React
[Using custom events in React](https://blog.logrocket.com/using-custom-events-react/)

#### Back To Props In React

## Prop Drilling

# What is Prop Drilling?

- Prop drilling occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it.

# What is an elongated Prop?

- An elongated prop is a prop that is not consumed but it is only passed down to another component. When a component receives a prop from its parent and doesn't consume the prop, it passes the prop down to another component. This prop is called elongated prop because it has been extended.

Whenever you see a prop being passed down by components that neither creates nor consumes the prop, you have an an elongated prop (as well as prop drilling)

# Why not to use prop drilling?

- Code Complexity: As components grow, prop drilling increases code complexity as it is difficult to track the flow of data through various components.

- Reduced Maintainability: It will become very challenging to maintain the code with prop drilling. When changes are required in the data flow, you need to make changes in many components.

- Performance Overhead: We have to pass props through unnecessary intermediary components which can impact performance.

- Decreased Component Reusability: Components used in prop drilling become tightly coupled to the structure of the parent components, so it very difficult to use it on other parts of the application.

- Increased Development Time: Prop drilling often requires additional planning to implement. This can slow down the development process, especially when the component hierarchies is complex.

Prop Drilling in react
[How to Avoid Prop Drilling in React](https://www.freecodecamp.org/news/avoid-prop-drilling-in-react/)

#### Something else?

[how i can setup custom domain](https://www.youtube.com/watch?v=0pcl24HXdeM)

[how i can setup custom domain](https://www.youtube.com/watch?v=GvgpzcGcRbQ)

<!--

# ================================================

-->

<!-- ALL REACT CONCEPTS -->

#### ALL REACT CONCEPTS

### Virtual DOM and Real DOM

## What is DOM ?

- DOM stands for ‘Document Object Model’. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app.

- DOM represents the entire UI of your application. The DOM is represented as a tree data structure. It contains a node for each UI element present in the web document.

- It is very useful as it allows web developers to modify content through JavaScript, also it being in structured format helps a lot as we can choose specific targets and all the code becomes much easier to work with.

## Disadvantages of real DOM :

- Every time the DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page.

- For this, each time there is a component update, the DOM needs to be updated and the UI components have to be re-rendered.

## The Virtual DOM

The DOM (Document Object Model) is a tree-like model that represents how user interface (UI) objects on a website are organized. Prior to React, the DOM had to be re-rendered every time there was a change to an application’s UI, which hindered site responsiveness.

One of the most useful features of React is its ability to change components on a website without having to update the entire DOM. This is accomplished through the virtual DOM, which is a virtual representation or copy of the DOM. Whenever a user takes action, like clicking a button, React updates the virtual DOM, compares the update to the previous version, detects the differences, then only updates the affected objects instead of refreshing the entire DOM. This makes the site faster, more responsive, and improves its performance.

## Differences between Virtual DOM and Real DOM

# Real DOM

-It is a tree representation of HTML elements
-It is maintained by the browser after parsing HTML elements
-After manipulation, it re-render the entire DOM
-Updates are heavyweight
-Performance is slow and the UX quality is low
-Less efficient due to re-rendering of DOM after each update

## Virtual DOM

-It is a lightweight copy of the original DOM
-It is maintained by JavaScript libraries
-After manipulation it only re-renders changed elements
-Updates are lightweight
-Performance is fast and UX is optimised
-Highly efficient as it performs batch updates

### react js tutorials

[react js tutorials](https://www.geeksforgeeks.org/reactjs-tutorials/?ref=lbp)
