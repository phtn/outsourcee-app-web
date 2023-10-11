import { ArrowRightIcon } from 'lucide-react'
import { Action } from '../styled'
import { Container, Img, Primary, Secondary, Subtext, Title } from './styled'
import { ReactElement } from 'react'

type HeroProps = {
	action: ReactElement
	image: string
	imageAlt: string
	subtext: string
	sticker?: ReactElement
	title: string
}

type CustomHeroProps = {
	primary: ReactElement
	secondary: ReactElement
}

const Hero = (props: HeroProps) => {
	const { action, image, imageAlt, sticker, subtext, title } = props
	return (
		<Container>
			<Primary>
				<Title>Achieve more.</Title>
				<Title>Simplify workload.</Title>
				<Title>Delegate with confidence</Title>
				<span className='h-10'></span>
				<Action size={'lg'}>
					<span>Available soon!</span>
					{/* <ArrowRightIcon
						width={24}
						height={24}
						className='ml-3 h-4 w-auto'
					/> */}
				</Action>
			</Primary>
			<Secondary>
				<Img
					alt={imageAlt}
					src={image}
					width={300}
					height={300}
				/>
				{sticker}
			</Secondary>
		</Container>
	)
}

const CustomHero = (props: CustomHeroProps) => {
	const { primary, secondary } = props
	return (
		<Container>
			<Primary>{primary}</Primary>
			<Secondary>{secondary}</Secondary>
		</Container>
	)
}

export { CustomHero, Hero }
export type { HeroProps, CustomHeroProps }
