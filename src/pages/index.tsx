import React from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'
const Button = styled.button`
  ${tw`bg-blue-900 hover:bg-blue-800 text-white p-2 rounded`}
`
export default function Home(): JSX.Element {
  return (
    <Layout>
      <Button>Activate</Button>
      <div>
        <h1>Hello world! </h1>
        <h2>Sanyam</h2>
      </div>
    </Layout>
  )
}
