import { FaBook } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'

import React from 'react'
const subLinks = [
  {
    page: 'home',
    links: [],
  },
  {
    page: 'about',
    links: [],
  },
  {
    page: 'courses',
    links: [
      { label: 'english', icon: <FaBook />, url: '/courses' },
      { label: 'math', icon: <FaBook />, url: '/courses' },
      { label: 'history', icon: <FaBook />, url: '/courses' },
      { label: 'science', icon: <FaBook />, url: '/courses' },
    ],
  },
  {
    page: 'blog',
    links: [
      { label: 'math', icon: <FaBook />, url: '/home' },
      { label: 'english', icon: <FaBook />, url: '/home' },
      { label: 'science', icon: <FaBook />, url: '/home' },
    ],
  },
  {
    page: 'contact',
    links: [
      { label: 'help', icon: <RiCustomerService2Fill />, url: '/blog' },
      { label: 'customers', icon: <RiCustomerService2Fill />, url: '/blog' },
    ],
  },
]

export default subLinks
