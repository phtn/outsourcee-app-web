import { Button } from '@/components/ui/button'
import Image from 'next/image'
import tw from 'tailwind-styled-components'

const Action = tw(Button)`
  rounded-full
  transition-all
  hover:px-12
  px-10
  md:py-4
  ease-out
  duration-500
`

// *  CONTAINERS  * //
const Container = tw.div`
  animate-out
  flex-1
  lg:grid
  lg:grid-cols-2
  block
  transition-all
  duration-1000
  lg:visible
`

const Primary = tw.div`
  flex
  md:h-full
  w-full
  lg:px-6
  flex-col
  justify-center
  items-center
  bg-zinc-100
  py-12
`

const Secondary = tw.div`
  flex
  xl:h-fit
  lg:h-screen
  md:pt-16
  items-center
  justify-center
  overflow-hidden
  transform-gpu
  hover:scale-110 
  transition-transform 
  duration-1000
`

// *  CONTENT * //
const Title = tw.h1`
  text-[2rem]
  lg:text-[3rem]
  font-thin
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

export { Action, Container, Primary, Secondary, Subtext, Title }
