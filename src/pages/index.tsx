import React from "react"
import { Layout } from "../components"
import tw, { styled } from "twin.macro"
import "tailwindcss/dist/base.min.css"
const Button = styled.button`
  ${tw`bg-blue-900 hover:bg-blue-800 text-white p-2 rounded`}
`

// const Button = tw.button`
//   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
// `
export default function Home(): JSX.Element {
  return (
    <Layout>
      <Button>Activate</Button>
      <div>
        <h1>Hello world! </h1>
        <h2>Sanyam</h2>
      </div>

      <div tw="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          tw="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div tw="px-6 py-4">
          <div tw="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p tw="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div tw="px-6 pt-4 pb-2">
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Layout>
  )
}
