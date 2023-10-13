import { HeroOverlay, LgContainer } from '../styled'
import Hero from '../hero'
import { HeroProps } from '../hero/hero'
import { FlashSticker } from '../sticker/sticker'
import Panel from '../panel'

const heroProps: HeroProps = {
	action: <></>,
	image: '/images/ss-v1.png',
	imageAlt: 'phone-ss',
	subtext: '',
	sticker: (
		<FlashSticker
			label='FREE!'
			lg
		/>
	),
	title: 'Delegate with confidence.',
}

export const Body = () => (
	<LgContainer>
		<Hero {...heroProps} />
		<HeroOverlay>
			<Panel>
				<span></span>
			</Panel>
		</HeroOverlay>
	</LgContainer>
)
