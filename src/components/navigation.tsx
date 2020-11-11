import React from 'react'
import { NavLink } from './common'

export default function Navigation(): JSX.Element {
  return (
    <nav tw="flex items-center justify-between flex-wrap my-auto sm:px-3">
      <span tw="font-semibold text-gray-900 text-3xl tracking-tight mx-3 sm:mx-0">
        Gatsby Typescript Tailwindcss Contentful Boilerplate
      </span>
      <div tw="items-center sm:h-16 h-10 sm:py-3">
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/services/" activeClassName="current-page">
          Services
        </NavLink>
        <NavLink to="/blog/" activeClassName="current-page">
          Blog
        </NavLink>
      </div>
    </nav>
  )
}
