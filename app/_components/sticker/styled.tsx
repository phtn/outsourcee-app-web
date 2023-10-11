import { BadgePercent } from 'lucide-react'
import tw from 'tailwind-styled-components'

type StickerProps = {
	$lg: boolean
}

const Container = tw.div<StickerProps>`
  ${(p) => (p.$lg ? 'h-44 w-44' : 'h- 10w-5')}

  flex
  flex-row
  bg-gradient-to-br
  from-primary/50
  to-secondary-foreground/10
  backdrop-blur-lg
  absolute
  top-0
  left-60
  rounded-full
  items-center
  justify-center
  fade-in-25
  duration-[1000]
  z-1000
`

export { Container }
