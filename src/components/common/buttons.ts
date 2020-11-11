import tw, { styled } from 'twin.macro'
import { COLORS } from './colors'

export const ButtonPrimary = styled.button`
  ${tw`p-0`}
  backgroundColor: ${COLORS.primary};
  color: ${COLORS.base};
`
export const ButtonAccent = styled.button`
  ${tw`p-0`}
  backgroundColor: ${COLORS.accent};
  color: ${COLORS.base};
`
export const ButtonPrimaryBorder = styled.button`
  ${tw`p-0`}
  backgroundColor: ${COLORS.primary};
  color: ${COLORS.base};
`
