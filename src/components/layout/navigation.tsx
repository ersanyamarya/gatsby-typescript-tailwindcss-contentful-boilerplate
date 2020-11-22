import { Link } from 'gatsby'
import React from 'react'
import tw, { styled } from 'twin.macro'

const Nav = styled.nav`
  ${tw`flex items-center px-6 py-2 justify-between bg-primary
  shadow-lg sticky top-0 z-50`}
  & .nav-link {
    ${tw`px-6 py-3 m-0 hover:text-primary-light`}
    text-decoration: none;
    &.current-page {
      ${tw`bg-back rounded-lg shadow-sm`}
    }
  }
`

export default function Navigation(): JSX.Element {
  return (
    <Nav>
      <span tw="font-semibold text-2xl tracking-tight text-back-dark">
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
