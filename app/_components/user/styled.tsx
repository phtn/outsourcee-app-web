import tw from 'tailwind-styled-components'

const ContentHeader = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-24
`

const SubscriptionCard = tw.div`
h-64
w-full
bg-[url('/images/card-v1.svg')]
bg-cover
rounded-xl
  bg-no-repeat
  flex
  flex-row
  p-6
  justify-between
`

const FooterContainer = tw.div`
  flex
  flex-row
  justify-evenly
  h-44
  w-full
`

const FooterContent = tw.div`
  flex
  items-center
  justify-center
  h-24
`

const FooterHeader = tw.div`
  flex
  items-center
  justify-center
  h-24
`

const UserContentBody = tw.div`
  items-center
  flex-1
  rounded-xl
  w-full
  h-[420px]
  transition-transform
  duration-[1000]
  animate-in
  scale-90
`

const LoginContent = tw.div`
  flex
  items-center
  justify-center
  w-full
`

const LoginHeader = tw.div`
  flex
  flex-row
  self-start 
  justify-around
  items-center
`

const PanelContainer = tw.div`
  flex-1
  my-10
`

const PanelItem = tw.div`
  h-16
  px-4
  w-full
  flex
  flex-row
  items-center
  justify-between
  border-b-[0.33px]
  border-slate-400/15
`

const PanelDetails = tw.div`
  flex
  flex-row
  items-center
`

const Title = tw.h1`
  font-medium
`

const UserContent = tw.div`
  items-center
  justify-center
  p-6
  w-[100%]
`

const UserDetailsContent = tw.div`
  flex
  flex-col
`

const UserHeader = tw.div`
  flex
  flex-row
  items-center 
  p-6
`
const UserProfile = tw.div`
  flex
  flex-row
  items-center
  justify-between
  w-full
`

export {
	ContentHeader,
	FooterContainer,
	FooterContent,
	FooterHeader,
	LoginContent,
	LoginHeader,
	PanelContainer,
	PanelDetails,
	PanelItem,
	SubscriptionCard,
	Title,
	UserContent,
	UserContentBody,
	UserDetailsContent,
	UserHeader,
	UserProfile,
}
