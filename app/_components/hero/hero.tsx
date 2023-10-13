import { ReactElement } from 'react'
import Image from 'next/image'
import { Action, Container, Primary, Secondary, Title } from './styled'

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
				<div className='flex flex-col items-center'>
					<Title>Achieve more.</Title>
					<Title>Simplify workload.</Title>
					<Title>Delegate with confidence.</Title>
				</div>
				<span className='h-10'></span>
				<div className='flex flex-col items-center'>
					<Action size={'lg'}>
						<span>Available soon!</span>
					</Action>
				</div>
			</Primary>
			<Secondary>
				<Image
					alt={imageAlt}
					src={image}
					width={300}
					height={300}
					className='w-auto h-[700px] md:h-[600px] mt-8'
				/>
				{/* {sticker} */}
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
