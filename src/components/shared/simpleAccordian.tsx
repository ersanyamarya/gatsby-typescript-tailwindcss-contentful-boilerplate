import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { SimpleAccordianDataSchema } from '../../hooks'

interface Props {
  singleOpen?: boolean
  hoverToOpen?: boolean
  accordianData: SimpleAccordianDataSchema[]
}

const Accord = styled.div`
  ${tw`m-0`}
`
const Title = styled.span`
  ${tw`text-xl font-bold py-2 block  flex justify-between cursor-pointer`}
`
const Description = styled.p`
  ${tw`py-0 text-sm lg:text-lg transition-all duration-500 ease-in-out h-0 opacity-0`}
  &.expand {
    ${tw`py-4 visible h-auto opacity-100`}
  }
`

const Icon = styled.svg`
  ${tw`w-5 m-0 p-0 transition-all duration-500 ease-in-out`}

  &.rotate {
    transform: rotateX(180deg);
  }
`

export default function SimpleAccordian({
  singleOpen = false,
  hoverToOpen = false,
  accordianData,
}: Props): JSX.Element {
  const [data, setData] = useState(accordianData)
  return (
    <>
      <h1 tw="text-center">Frequently Asked Question</h1>
      {data.map(faq => (
        <Accord key={faq.id}>
          <Title
            onClick={() => {
              if (!singleOpen) faq.open = !faq.open
              else {
                data.forEach(f => {
                  if (f.id === faq.id) faq.open = !f.open
                  else f.open = false
                })
              }
              setData([...data])
            }}
            onMouseEnter={() => {
              if (hoverToOpen) {
                if (!singleOpen) faq.open = !faq.open
                else {
                  data.forEach(f => {
                    if (f.id === faq.id) faq.open = !f.open
                    else f.open = false
                  })
                }
                setData([...data])
              }
            }}
          >
            {faq.title}
            <Icon
              className={faq.open ? 'rotate' : ''}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-alt-circle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"></path>
            </Icon>
          </Title>
          <Description className={faq.open ? 'expand' : ''}>{faq.description}</Description>

          <hr />
        </Accord>
      ))}
    </>
  )
}
