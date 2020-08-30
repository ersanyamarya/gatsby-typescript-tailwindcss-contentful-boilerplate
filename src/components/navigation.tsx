import React from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'

interface NavigationProps {
  fontWeight?: number | string
}
const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: ${(props: NavigationProps) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 1rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    ${tw`text-teal-900`}
  }
  &:last-of-type {
    margin-right: 0;
  }
`

export default function Navigation(): JSX.Element {
  return (
    <nav tw="flex items-center justify-between flex-wrap bg-teal-700 p-6">
      <div tw="flex items-center flex-shrink-0 text-white mr-6">
        <span tw="font-semibold text-xl tracking-tight">Gatsby Typescript Tailwindcss Contentful Boilerplate</span>
      </div>
      <div tw="block lg:hidden">
        <button tw="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg tw="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div tw="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:visible hidden">
        <div tw="text-sm lg:flex-grow"></div>
        <div>
          <NavLink to="/" tw="text-teal-200 hover:text-white" activeClassName="current-page">
            Home
          </NavLink>
          <NavLink to="/about/" tw="text-teal-200 hover:text-white" activeClassName="current-page">
            About
          </NavLink>
          <NavLink to="/blog/" tw="text-teal-200 hover:text-white" activeClassName="current-page">
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
