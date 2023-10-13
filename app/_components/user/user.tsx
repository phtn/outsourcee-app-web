import { Button } from '@/components/ui/button'
import { UserCircle2Icon } from 'lucide-react'

export const User = () => {
	return (
		<Button
			variant={'ghost'}
			size={'icon'}>
			<UserCircle2Icon className='text-secondary-foreground' />
		</Button>
	)
}
