import React from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'

const Hero = styled.div`
  ${tw`bg-gray-200 block sm:flex px-6 py-6`}
`
export default function Home(): JSX.Element {
  return (
    <Layout>
      <Hero>
        <div tw="flex-1 flex flex-col justify-center items-start">
          {/* <div tw="m-auto"> */}
          <h1>Sanyam Arya </h1>
          <h2>I am awesome</h2>
          {/* </div> */}
        </div>
        <div tw="flex-1 flex justify-end my-auto">
          <img
            tw="sm:max-w-screen-sm"
            src=" https://avatars2.githubusercontent.com/u/28115284?s=460&u=0ad2695172514a046201f4c9f877d74319c3e24d&v=4"
            alt="image"
          />
        </div>
      </Hero>
    </Layout>
  )
}
