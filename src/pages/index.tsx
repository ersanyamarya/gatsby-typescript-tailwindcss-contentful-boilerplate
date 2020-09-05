import React from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'

const Hero = styled.div`
  ${tw`bg-gray-100 block sm:flex px-6 py-6`}
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
      <p>
        Consequat et ullamco ad laboris velit fugiat deserunt mollit in adipisicing id in. Dolor labore id minim eu
        voluptate ipsum sunt. Consectetur eiusmod incididunt occaecat esse ex ut aliquip proident. Ex dolore mollit
        consectetur sit id. Labore labore non quis nostrud dolore. Commodo cupidatat incididunt duis in tempor do
        ullamco cillum do ipsum quis deserunt reprehenderit. Veniam nisi mollit in dolor sit. Eu ex laboris sit
        consectetur commodo duis occaecat consequat. Dolore esse nisi amet deserunt tempor proident est sunt do.
        Deserunt eu deserunt Lorem voluptate exercitation cupidatat dolor est ea. Consectetur sit elit dolor pariatur.
        Pariatur do ea laboris ea esse. Sunt ullamco veniam amet sint quis. Aliquip id laboris qui cupidatat sunt
        reprehenderit consectetur aliquip Lorem est eiusmod aliquip excepteur ipsum. Adipisicing in ullamco sint aliqua
        dolor cillum aliqua labore consequat. Laboris dolor consectetur irure aliqua aliqua tempor magna consequat
        commodo aliqua voluptate ut. Ex ea id nulla quis. Et et eiusmod dolore duis consectetur nostrud elit anim
        pariatur. Eiusmod laboris ipsum id duis proident irure id. Ad Lorem eu labore laborum elit aliqua ex. Cupidatat
        sint aliqua ullamco ea aute elit. In adipisicing nulla nulla esse do ullamco elit veniam reprehenderit quis
        aliqua. Id dolore nostrud fugiat incididunt. Ipsum exercitation cupidatat nisi anim. Cillum in nulla fugiat sit
        deserunt eiusmod sit id enim irure velit incididunt ut laboris. Minim nisi reprehenderit magna id eu tempor
        officia ipsum aute enim dolore velit aute. Velit Lorem dolor consectetur ea. Culpa est ullamco in tempor ea.
        Sunt ea consequat minim et ipsum in enim aute ullamco nulla magna. Proident laborum nulla ea reprehenderit sint
        enim incididunt. Ea id non ex officia. Pariatur sunt veniam occaecat non eu dolore exercitation veniam laborum
        adipisicing enim. Veniam qui magna nostrud commodo officia ad. Amet tempor ut duis nisi enim magna anim aute id
        tempor nostrud ad id tempor. Deserunt ut tempor irure et laboris elit pariatur excepteur nulla. Anim cillum
        exercitation nulla veniam proident consequat voluptate est reprehenderit ullamco eiusmod ex proident. Dolore
        enim minim consectetur id sunt aliqua cupidatat ad enim eiusmod veniam. Incididunt exercitation pariatur quis
        exercitation mollit. Commodo nostrud mollit velit adipisicing. Adipisicing quis officia eu cillum quis non.
        Consequat velit mollit eu est. Exercitation aliqua dolor et eu. Enim ullamco reprehenderit ex irure velit ad est
        excepteur quis. Voluptate quis officia mollit fugiat. Ea anim irure est cupidatat veniam minim commodo quis.
        Proident nulla adipisicing excepteur minim qui consectetur adipisicing aute tempor in ullamco cillum proident
        sunt. Non minim reprehenderit elit minim sit do adipisicing nulla laborum irure et reprehenderit. Elit anim
        mollit minim sit Lorem pariatur dolor aute consequat veniam. Est exercitation culpa ipsum deserunt amet laboris
        aliqua amet pariatur amet labore. Mollit ipsum quis anim duis ullamco. Id consequat ipsum aute officia aliquip
        aute aute eu fugiat cupidatat amet.
      </p>
    </Layout>
  )
}
