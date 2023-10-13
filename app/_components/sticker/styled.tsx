import tw from 'tailwind-styled-components'

type StickerProps = {
	$lg: boolean
}

const Container = tw.div<StickerProps>`
  ${(p) => (p.$lg ? 'h-32 w-32' : 'h-10 w-5')}

  flex
  flex-row
  bg-gradient-to-br
  from-primary/50
  to-secondary-foreground/10
  backdrop-blur-lg
  absolute
  top-10
  left-[calc(100vw-140px)]
  rounded-full
  items-center
  justify-center
  fade-in-25
  duration-[1000]
  z-1000
`

export { Container }
