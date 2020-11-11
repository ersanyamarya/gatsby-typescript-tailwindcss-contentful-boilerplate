import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'
// import { COLORS } from '.'

export const NavLink = styled(Link)`
  ${tw`px-5 py-3 text-red-900 hover:text-gray-500`}
  text-decoration: none;
  &.current-page {
    ${tw`bg-gray-400 rounded-lg shadow-sm`}
  }
`
