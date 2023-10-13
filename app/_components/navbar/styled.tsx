import tw from 'tailwind-styled-components'

const Container = tw.div`
  flex
  items-center
  justify-between
  sticky
  backdrop-blur-lg
  top-0
  z-50
  px-6
  py-3
  border-b
`

const Brand = tw.h1`
  flex
  text-[2rem]
  font-bold
  w-full
  items-center
`

const Hamburger = tw.div`
  flex
  flex-row
  justify-around
`

const MensCover = tw.div`
  h-full
`

const Menubar = tw.div`
  items-center
  justify-end
  transition-transform
  duration-200
  ease-out
  scale-x-0
  lg:scale-x-100
  xl:flex
  flex-row
  hidden
  z-40
  w-full
`

const WomensCover = tw.div`
  h-full
  bg-[url('/images/womens-bag.webp')]
  bg-cover
  bg-no-repeat
`

export { Brand, Container, Menubar, MensCover, Hamburger, WomensCover }
