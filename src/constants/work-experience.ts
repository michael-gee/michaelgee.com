export type WorkExperience = {
	company: string;
	position: string;
	startDateYear: string;
	endDateYear: string;
	image: string;
	imageAlt: string;
};

export const workExperience: WorkExperience[] = [
	{
		company: 'GoFan',
		position: 'Senior Frontend Software Engineer',
		startDateYear: 'Sep 2021',
		endDateYear: 'Present',
		image: 'work/gofan.png',
		imageAlt: 'GoFan company logo'
	},
	{
		company: 'Inxeption',
		position: 'Frontend Software Engineer',
		startDateYear: 'Feb 2021',
		endDateYear: 'Sep 2021',
		image: 'work/inx.jpg',
		imageAlt: 'Inxeption company logo'
	},
	{
		company: 'CoreView',
		position: 'Software Development Engineer',
		startDateYear: 'Jul 2018',
		endDateYear: 'Feb 2021',
		image: 'work/coreview.jpg',
		imageAlt: 'CoreView company logo'
	},
	{
		company: 'Cegmag Solutions',
		position: 'Software Developer',
		startDateYear: 'Feb 2017',
		endDateYear: 'Jul 2028',
		image: 'work/cegmag.jpg',
		imageAlt: 'Cegmag Solutions company logo'
	}
];
