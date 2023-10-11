import Image from 'next/image'
import tw from 'tailwind-styled-components'

type ImageProps = {
	height?: number
	width?: number
	alt: string
	src: string
}

// *  CONTAINERS  * //
const Container = tw.div`
  invisible
  animate-out
  flex-1
  xl:px-40
  lg:px-24
  lg:pb-24
  lg:grid
  lg:grid-cols-2
  transition-all
  duration-1000
  xl:hover:px-[10.85%]
  lg:hover:px-[7.85%]
  lg:visible
`

const Img = tw(Image)`
  w-auto
  mt-8
  md:h-[600px] 
  h-[700px]
`

const Primary = tw.div`
  xl:flex
  h-full
  w-full
  px-3
  xl:px-10
  lg:px-6
  flex-col
  justify-center
  items-start
  xl:items-start
`

const Secondary = tw.div`
  xl:h-fit
  lg:h-screen
  pt-16
  items-center
  justify-center
  md:rounded-xl
  overflow-hidden
  transition-all
  xl:scale-95
  transform-gpu
  duration-1000
`

// *  CONTENT * //
const Title = tw.h1`
  text-[1.5rem]
  lg:text-[2.5rem]
  font-thin
  text-foreground
  dark:text-secondary-foreground
  leading-tight
  min-w-[90%]
  self-center
`

const Subtext = tw.h1`
  text-[1.15rem]
  md:text-[1rem]
  font-regular
  text-slate-500
  dark:text-slate-400
  my-12
  w-[90%]
  flex
`

export { Container, Img, Primary, Secondary, Subtext, Title }
