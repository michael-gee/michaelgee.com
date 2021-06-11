import { IconType } from 'react-icons/lib'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

interface AwesomeBookProps {
	title: string
	author: string
	bookImg: string
	bookUrl: string
	avatar: string
	descPreview: string[] | null
	description: string[]
	guest: string
	guestBio: string
	guestLinks: { id: string; icon: IconType; href: string }[]
}

const awesomeBooks: AwesomeBookProps[] = [
	{
		title: 'Shoe Dog: A Memoir by the Creator of NIKE',
		author: 'Phil Knight',
		bookImg: '/images/awesome-books/saronyitbarek/book.jpg',
		bookUrl: 'https://www.goodreads.com/book/show/27220736-shoe-dog',
		avatar: '/images/awesome-books/saronyitbarek/avatar.jpg',
		descPreview: null,
		description: [
			"One of the most inspirational books about business you'll find.",
			'It really gives you an up close and personal look at the sweat, patience, time, and endurance it takes to build a multi-billion powerhouse brand and company.',
			'Truly one of my favs.'
		],
		guest: 'Saron Yitbarek',
		guestBio: 'Founder of Disco & CodeNewbie',
		guestLinks: [
			{ id: 'website', icon: FiExternalLink, href: 'https://www.heydisco.com/' },
			{ id: 'twitter', icon: FaTwitter, href: 'https://twitter.com/saronyitbarek' }
		]
	},
	{
		title: 'War of Art: Break Through the Blocks and Win Your Inner Creative Battles',
		author: 'Steven Pressfield',
		bookImg: '/images/awesome-books/michaelchan/book.jpg',
		bookUrl: 'https://www.goodreads.com/book/show/1319.The_War_of_Art',
		avatar: '/images/awesome-books/michaelchan/avatar.jpg',
		descPreview: [
			"This book is the only reason that I've produced anything.",
			'It\'s like a shot of adrenaline to the heart for anyone who believes they are smart, creative, and have good things to offer but "just haven\'t had a shot".',
			'This book is about shutting up, doing the work, and personifying the dark force of Resistance that presses back against your creative work.'
		],
		description: [
			"This book is the only reason that I've produced anything.",
			'It\'s like a shot of adrenaline to the heart for anyone who believes they are smart, creative, and have good things to offer but "just haven\'t had a shot".',
			'This book is about shutting up, doing the work, and personifying the dark force of Resistance that presses back against your creative work.',
			'The War of Art hurts like hell to read. Once you\'ve read it, you can\'t go back to "just doing the dishes before starting" or "just replying to a few emails before diving in" because you know it\'s a trick!',
			'If you want to achieve your creative goals, read this and endure the pain.',
			"If you're pretty happy with your life as it is, stay away.",
			'- Michael Chan',
			'Quote From The Book :',
			"<quote>“ You know, Hitler wanted to be an artist. At eighteen he took his inheritance, seven hundred kronen, and moved to Vienna to live and study... Ever see one of his paintings? Neither have I. Resistance beat him. Call it overstatement but I'll say it anyway: it was easier for Hitler to start World War II than it was for him to face a blank square of canvas. ”"
		],
		guest: 'Michael Chan',
		guestBio: 'Host of React Podcast',
		guestLinks: [
			{ id: 'website', icon: FiExternalLink, href: 'https://chan.dev/posts/' },
			{ id: 'twitter', icon: FaTwitter, href: 'https://twitter.com/chantastic' },
			{ id: 'github', icon: FaGithub, href: 'https://github.com/chantastic' }
		]
	}
]

export { awesomeBooks }
export type { AwesomeBookProps }
