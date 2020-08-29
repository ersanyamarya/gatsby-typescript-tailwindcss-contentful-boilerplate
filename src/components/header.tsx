import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

interface NavigationProps {
  fontWeight?: number | string
}
const NavLink = styled(Link)`
  color: #222;
  font-size: 1.2rem;
  font-weight: ${(props: NavigationProps) => props.fontWeight || "normal"};
  line-height: 2;
  margin: 0 1rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

export default function Header(): JSX.Element {
  return (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 3vw;
        @media (min-width: calc(550px + 10vw)) {
          padding-left: calc((100vw - 550px - 0.5rem) / 2);
          padding-right: calc((100vw - 550px - 0.5rem) / 2);
        }
      `}
    >
      <NavLink to="/" fontWeight="bold">
        Gatsby Starter Typescript Contentful
      </NavLink>
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/blog/" activeClassName="current-page">
          Blog
        </NavLink>
      </nav>
    </header>
  )
}
