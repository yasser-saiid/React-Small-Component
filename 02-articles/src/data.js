import React from './assets/Images/React.jpg'
import JavaScript from './assets/Images/JavaScript.png'

const articles = [
  {
    id: 100,
    img: React,
    title: 'React Hook - React.Memo()',
    text: `Components in React are designed to re-render whenever the state or props value changes. However, this can impact your application's performance because, even if the change is only intended to affect the parent component, every other child component attached to the parent component will re-render. When a parent component re-renders, so do all of its child components`,
    date: 'Nov 15, 2022',
    author: 'Joel Olawanle',
  },
  {
    id: 101,
    img: JavaScript,
    title: 'JavaScript Event - Event Propagation ',
    text: `Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination. The event needs to pass through every node on the DOM until it reaches the end, or if it is forcibly stopped.`,
    date: 'Mar 16, 2022',
    author: 'Greg Sakai',
  },
  {
    id: 102,
    img: React,
    title: 'React Hook - UseCallback()',
    text: `The useCallback hook is a built-in hook in React that lets you memoize a callback function by preventing it from being recreated on every render. In simple terms, it means that the callback function is cached and does not get redefined on every render`,
    date: 'Nov 21, 2021',
    author: 'Dmitri Pavlutin',
  },
  {
    id: 103,
    img: React,
    title: 'Difference  Between Real Dom And Virtual Dom',
    text: `The Real DOM, also known as the actual DOM, is the browser's representation of a web page's HTML structure.he Virtual DOM is an abstraction of the Real DOM, created and maintained by JavaScript libraries such as React. The Virtual DOM is a lightweight copy of the Real DOM`,
    date: 'May 13, 2022',
    author: 'Suraksha Sing',
  },
  {
    id: 104,
    img: JavaScript,
    title: `JavaScript Modules - A Beginner's Guide`,
    text: `A module is just a file. One script is one module. As simple as that. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:export keyword labels variables and functions that should be accessible from outside the current module.import allows the import of functionality from other modules.`,
    date: 'Aug 26, 2021',
    author: 'Andrew Nicols',
  },
]

export default articles
