import { faBars, faCommentDots, faUserFriends, faCog } from "@fortawesome/free-solid-svg-icons";

export default [
	{
		label: 'menu',
		icon: faBars,
		path: '/home',
	},
	{
		label: 'chats',
		icon: faCommentDots,
		path: '/',
	},
	{
		label: 'contacts',
		icon: faUserFriends,
		path: '/contacts',
	},
	{
		label: 'settings',
		icon: faCog,
		path: '/settings'
	},
]