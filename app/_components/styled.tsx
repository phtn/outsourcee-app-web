import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

const DarkSection = tw.div`
  flex
  bg-primary
  h-full
`

const HeroOverlay = tw.div`
  bg-[url('/images/stacked-blue.svg')]
  bg-cover
  bg-no-repeat
`

const LgContainer = tw.div`
  flex-1
  rounded-sm
  items-center
  justify-center
  px-0
  pt-0
  bg-gradient-to-br
  bg-slate-100
  from-secondary/25
  to-background
  dark:bg-slate-100/5
  transition-all
  ease-out
  duration-1000
`

const Main = tw.div`
  w-full
  h-full
  overflow-hidden
`

const MediumGridCol = tw.div`
  grid
  md:grid-cols-2
  w-full
  h-full
  gap-24
`

const UserOverlay = tw.div`
  bg-[url('/images/h-splash.svg')]
  bg-cover
  bg-no-repeat
`

export {
	DarkSection,
	HeroOverlay,
	LgContainer,
	Main,
	MediumGridCol,
	UserOverlay,
}
