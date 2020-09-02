import React, { ReactNode } from 'react'
import { Global, css } from '@emotion/core'
import Navigation from './navigation'
import tw, { styled } from 'twin.macro'

const Main = styled.main`
  ${tw`px-4 sm:px-10`}
`
interface Props {
  children: ReactNode
}
export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            ${tw`m-0 w-screen h-screen p-0 `}
            font-size:16px;
            /* margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 14px;
            line-height: 1.4;
            */
          }
          h1 {
            ${tw`text-3xl sm:text-6xl font-sans`}
          }
          h2 {
            ${tw`text-xl font-sans`}
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.4;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
          }
          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Navigation />
      <Main>{children}</Main>
    </>
  )
}
