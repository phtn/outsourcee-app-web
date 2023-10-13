import { Container } from './styled'

type Props = {
	label: string
	lg?: boolean
}

const Sticker = ({ label, lg }: Props) => {
	return <Container $lg={lg as boolean}>{label}</Container>
}

const FlashSticker = ({ label, lg }: Props) => (
	<Container $lg={lg as boolean}>
		<span className={`flex text-slate-900 text-[32px] font-bold leading-tight`}>
			{label}
		</span>
	</Container>
)

export { FlashSticker, Sticker }
