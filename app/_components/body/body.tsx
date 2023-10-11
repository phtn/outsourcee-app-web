import { DarkSection, HeroOverlay, LgContainer, MediumGridCol } from '../styled'
import Panel from '../panel'
import UpItem from '../upitem'
import { BigPanel } from '../panel/panel'
import Hero from '../hero'
import { HeroProps } from '../hero/hero'
import { FlashSticker } from '../sticker/sticker'
import { CheckoutProductProps } from '../checkout/types'

/*




*/

const product: CheckoutProductProps = {
	productDescription:
		'Botanical Extract with Orange Peel Body Soap - Helps speed up cell renewal.',
	productImage: '/images/soap-one.png',
	productInfo:
		'All Natural ingredients including 0.50% Kojic Acid, 0.50% Arbutin, 0.50% Vitamin C, 0.50% Vitamin E and 0.30% Glutathione.',
	productName: 'Glow Skin Soap',
	productPrice: 575,
}

const heroProps: HeroProps = {
	action: <></>,
	image: '/images/ss-v1.png',
	imageAlt: 'phone-ss',
	subtext:
		'Meticulously crafted to provide a rejuvenating and invigorating experience for your face and body.',
	sticker: (
		<FlashSticker
			label='FREE!'
			lg
		/>
	),
	title: 'Delegate with confidence.',
}

const upItems = [
	{ title: 'Appalachian', description: '', image: '/images/azure-one.png' },
	{ title: 'Rockies', description: '', image: '/images/azure-two.png' },
]

const MidSection = () => (
	<BigPanel>
		<DarkSection>
			<MediumGridCol>
				<UpItem {...upItems[0]} />
				<UpItem {...upItems[1]} />
			</MediumGridCol>
		</DarkSection>
	</BigPanel>
)

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
