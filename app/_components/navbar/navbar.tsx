'use client'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Brand, Container, Menubar } from './styled'
import Link from 'next/link'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import '@/components/ui/styles.css'
import { MobileMenu } from '../user/mobile-menu/mobile-menu'

const Menu = () => (
	<Menubar>
		<NavigationMenu>
			<NavigationMenuList>
				<Services />
				<Features />
				<FAQs />
				<Support />
				<NavigationMenuIndicator className='NavigationMenuIndicator' />
			</NavigationMenuList>
		</NavigationMenu>
	</Menubar>
)

const TM = () => (
	<span className='font-thin text-xl text-foreground/75'>&trade;</span>
)

export const Navbar = () => {
	return (
		<Container>
			<Brand>
				outsourcee
				<TM />
			</Brand>
			<Menu />
			<MobileMenu />
		</Container>
	)
}

const Services = () => (
	<NavigationMenuItem>
		<NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
		<NavigationMenuContent className='NavigationMenuContent'>
			<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
				<li className='row-span-3'>
					<NavigationMenuLink asChild></NavigationMenuLink>
				</li>
				<ListItem
					href='/'
					title='Business'>
					From small to large businesses
				</ListItem>
				<ListItem
					href='/'
					title='Household'>
					From gardener to pet taker.
				</ListItem>
				<ListItem
					href='/'
					title='Individuals'>
					From hobbies to personale projects
				</ListItem>
			</ul>
		</NavigationMenuContent>
	</NavigationMenuItem>
)

const Features = () => (
	<NavigationMenuItem>
		<NavigationMenuTrigger>HOW IT WORKS</NavigationMenuTrigger>
		{/* <NavigationMenuContent className='NavigationMenuContent'>
			<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
				<li className='row-span-3'>
					<NavigationMenuLink asChild>
						<FeaturesCover>
							<a
								className='flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md'
								href='/'>
								<div className='mb-2 mt-4 mr-3 text-xs font-bold text-primary-foreground'>
								FAQs	
								</div>
							</a>
						</FeaturesCover>
					</NavigationMenuLink>
				</li>
				<ListItem
					href='/'
					title='In a bag'>
					Things you didn&apos;t know you need.
				</ListItem>
				<ListItem
					href='/'
					title='Intimate Care'>
					All personal care from face to nails.
				</ListItem>
				<ListItem
					href='/'
					title='Wellness'>
					Get the right elements for your body.
				</ListItem>
			</ul>
		</NavigationMenuContent> */}
	</NavigationMenuItem>
)

const Support = () => (
	<NavigationMenuItem>
		<Link
			href='/'
			legacyBehavior
			passHref>
			<NavigationMenuLink className={navigationMenuTriggerStyle()}>
				SUPPORT
			</NavigationMenuLink>
		</Link>
	</NavigationMenuItem>
)

const FAQs = () => (
	<NavigationMenuItem>
		<Link
			href='/'
			legacyBehavior
			passHref>
			<NavigationMenuLink className={navigationMenuTriggerStyle()}>
				FAQs
			</NavigationMenuLink>
		</Link>
	</NavigationMenuItem>
)

const ListItem = forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}>
					<div className='text-md font-extrabold tracking-wide leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
