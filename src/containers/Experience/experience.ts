export interface ExperienceItem {
	company: string
	title: string
	dates: string
	description: string[]
	id: string
}

export const experience: ExperienceItem[] = [
	{
		company: 'Inxeption',
		title: 'Software Engineer',
		dates: '03/2021 - Present',
		description: [
			"Recently started my next exciting opportunity with Inxeption. The description of my roles & responsibilities will be added over time after I've had more time with the company."
		],
		id: 'inxeption'
	},
	{
		company: 'CoreView',
		title: 'Software Development Engineer',
		dates: '07/2018 - 03/2021',
		description: [
			'Core contributor to the development of CoreFlow, the workflow automation engine for CoreView',
			'Lead front-end developer responsible for organizing and maintaining micro front-ends built with React',
			'Contributing to the back-end infrastructure and APIs built with C#, .NET Core, and AWS',
			'Building the design system of UI components to be reused across all front-end applications',
			'Collaborating with teammates, providing code reviews, and implementing best practice code with a primary focus around user experience and keeping the codebase maintainable',
			'Work closely with product management and quality assurance team members to achieve well organized and time-intensive agile sprints'
		],
		id: 'coreview'
	},
	{
		company: 'CEGMAG Solutions',
		title: 'Software Developer',
		dates: '02/2017 - 07/2018',
		description: [
			'Developed various web applications using full-stack JavaScript and/or WordPress',
			'Brainstormed & created custom UI layout themes and reusable application features',
			'Researched and provided proof of concept demos using various JavaScript tools, frameworks, and libraries to determine the best project solutions',
			'Collaborated directly with customers to provide UI/UX recommendations and deliver on exact feature requests'
		],
		id: 'cegmag'
	}
]
