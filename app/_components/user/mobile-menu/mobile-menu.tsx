import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

const Trigger = () => {
	return (
		<div className='flex'>
			<Button
				size='icon'
				variant='secondary'
				className='rounded-full'>
				<ChevronLeft className='h-5 w-5 text-primary' />
			</Button>
		</div>
	)
}

const MobileMenu = () => {
	return (
		<div className='lg:w-0 lg:hidden'>
			<Trigger />
		</div>
	)
}

export { MobileMenu }
