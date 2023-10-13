import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ChevronLeft } from 'lucide-react'

const Trigger = () => {
	return (
		// <div className='flex'>
		<Button
			size='icon'
			variant='secondary'
			className='rounded-full'>
			<ChevronLeft className='h-5 w-5 text-primary' />
		</Button>
		// </div>
	)
}

const MobileMenu = () => {
	return (
		<div className='lg:w-0 lg:hidden'>
			<Sheet>
				<SheetTrigger>
					<Trigger />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Hi There!</SheetTitle>
						<SheetDescription></SheetDescription>
					</SheetHeader>
					<div className='grid gap-4 py-4'></div>
					<SheetFooter>
						<SheetClose asChild>
							<Button type='submit'>v1.0.1</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export { MobileMenu }
