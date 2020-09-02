import React from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'

const NavLink = styled(Link)`
  ${tw`px-5 py-3 `}
  text-decoration: none;
  &.current-page {
    ${tw`bg-gray-600 rounded-lg shadow-lg`}
  }
`

export default function Navigation(): JSX.Element {
  return (
    <nav tw="flex items-center justify-between flex-wrap bg-gray-700 my-auto sm:px-3 shadow-lg">
      <span tw="font-semibold text-white text-xl tracking-tight mx-3 sm:mx-0">
        Gatsby Typescript Tailwindcss Contentful Boilerplate
      </span>
      <div tw="items-center sm:h-16 h-10 sm:py-3">
        <NavLink to="/" tw="text-gray-200 hover:text-white" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" tw="text-gray-200 hover:text-white" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/blog/" tw="text-gray-200 hover:text-white" activeClassName="current-page">
          Blog
        </NavLink>
      </div>
    </nav>
  )
}
