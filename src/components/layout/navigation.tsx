import { Link } from 'gatsby'
import React from 'react'
import tw, { styled } from 'twin.macro'

const Nav = styled.nav`
  ${tw`flex items-center px-6 py-2 justify-between shadow-lg sticky top-0 bg-gray-100`}
`

export default function Navigation(): JSX.Element {
  return (
    <Nav>
      <span tw="font-semibold text-gray-900 text-2xl tracking-tight z-50">
        <Link to="/">Gatsby Typescript Tailwindcss Contentful Boilerplate</Link>
      </span>
      <div tw="flex items-center my-2">
        <Link className="nav-link" to="/components/" activeClassName="current-page">
          Components
        </Link>
        <Link className="nav-link" to="/about/" activeClassName="current-page">
          About
        </Link>
        <Link className="nav-link" to="/services/" activeClassName="current-page">
          Services
        </Link>
        <Link className="nav-link" to="/blog/" activeClassName="current-page">
          Blog
        </Link>
      </div>
    </Nav>
  )
}
