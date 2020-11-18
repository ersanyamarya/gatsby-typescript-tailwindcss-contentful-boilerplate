import React from 'react'
import { Global } from '@emotion/core'
import Footer from './footer'
import tw, { styled, css } from 'twin.macro'
import { COLORS } from '../shared'
import Navigation from './navigation'

const Main = styled.main`
  ${tw`m-0 z-0`}
`
interface Props {
  children: JSX.Element | any
}
export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            ${tw`m-0 p-0 `}
          }
          * + * {
            margin-top: 0rem;
          }
          html,
          body {
            ${tw`m-0 w-screen h-screen p-0 `}
            font-size:16px;
            font-family: 'Open Sans', sans-serif;
            background-color: #fff;
            color: ${COLORS.accentDark};
          }
          body::-webkit-scrollbar {
            display: none;
          }
          body: {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .avatar {
            ${tw`my-auto ml-auto block rounded-full`}
            height:5rem;
            width: 5rem;
          }
          h1 {
            ${tw`text-5xl`}
          }
          h2 {
            ${tw`text-4xl`}
          }
          h3 {
            ${tw`text-3xl`}
          }
          h4 {
            ${tw`text-2xl`}
          }
          h5 {
            ${tw`text-xl font-semibold`}
          }
          h6 {
            ${tw`text-lg font-semibold`}
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            ${tw`my-4 tracking-wide`}
          }
          p {
            ${tw`text-lg`}
          }
          b {
            ${tw`font-bold`}
          }
          li {
            margin-top: 0.25rem;
          }
          img {
            padding: 0;
            margin: 0;
          }
          .right-top {
            position: absolute;
            margin: 2rem;
            right: 0;
            z-index: 100;
          }
          .right-bottom {
            position: absolute;
            margin: 2rem;
            right: 0;
            bottom: 0;
            z-index: 100;
          }
          .shadow {
            box-shadow: 2px 4px 6px #33333366;
          }
          hr {
            ${tw`h-0 border m-2`}
            border-color: ${COLORS.primaryDark};
          }
          button {
            ${tw`px-8 py-3 text-lg font-bold rounded-lg uppercase`}
            color: ${COLORS.base};
            background: ${COLORS.primary};
            outline: none !important;
            position: relative;
            overflow: hidden;
            box-shadow: 1px 2px 3px #33333366;
            &:hover {
              box-shadow: 2px 4px 6px #33333366;
            }
            &:after {
              ${tw`block absolute rounded-full opacity-50`}
              content: '';
              left: 50%;
              top: 50%;
              width: 300px;
              height: 300px;
              margin-left: calc(-300px / 2);
              margin-top: calc(-300px / 2);
              background: ${COLORS.primaryDark};

              transform: scale(0);
            }
            &:not(:active):after {
              animation: ripple 1s ease-out;
            }
            &:after {
              ${tw`invisible`}
            }
            &:focus:after {
              ${tw`visible`}
            }
          }

          @keyframes ripple {
            0% {
              transform: scale(0);
            }
            20% {
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(1);
            }
          }

          .primary {
            color: ${COLORS.base};
            background: ${COLORS.primary};
          }
          .secondry {
            color: ${COLORS.base};
            background: ${COLORS.accent};
          }
          .base {
            color: ${COLORS.primaryDark};
            background: ${COLORS.baseLight};
          }
          button.secondry:after {
            background: ${COLORS.accentDark};
          }
          .primaryBorder {
            ${tw`border-4`}
            color: ${COLORS.primaryDark};
            background: ${COLORS.base};
            border-color: ${COLORS.primaryDark};
          }
          .secondryBorder {
            ${tw`border-4`}
            color: ${COLORS.accentDark};
            background: ${COLORS.base};
            border-color: ${COLORS.accentDark};
          }
          button.secondryBorder:after {
            background: ${COLORS.accentDark};
          }
          .nav-link {
            ${tw`px-6 py-3 m-0 hover:text-gray-500`}
            text-decoration: none;
            &.current-page {
              ${tw`bg-gray-400 rounded-lg shadow-sm`}
            }
          }
          path {
            fill: ${COLORS.primaryDark};
          }
        `}
      />
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
