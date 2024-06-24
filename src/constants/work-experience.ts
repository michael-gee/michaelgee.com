export type WorkExperience = {
  company: string;
  position: string;
  startDateYear: string;
  endDateYear: string;
  imagePath: string;
  imageAlt: string;
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PlayOn',
    position: 'Senior Frontend Software Engineer',
    startDateYear: 'Sep 2021',
    endDateYear: 'Present',
    imagePath: '/src/assets/work/playon.jpeg',
    imageAlt: 'PlayOn company logo'
  },
  {
    company: 'Inxeption',
    position: 'Frontend Software Engineer',
    startDateYear: 'Feb 2021',
    endDateYear: 'Sep 2021',
    imagePath: '/src/assets/work/inx.jpg',
    imageAlt: 'Inxeption company logo'
  },
  {
    company: 'CoreView',
    position: 'Software Development Engineer',
    startDateYear: 'Jul 2018',
    endDateYear: 'Feb 2021',
    imagePath: '/src/assets/work/coreview.jpg',
    imageAlt: 'CoreView company logo'
  },
  {
    company: 'Cegmag Solutions',
    position: 'Software Developer',
    startDateYear: 'Feb 2017',
    endDateYear: 'Jul 2018',
    imagePath: '/src/assets/work/cegmag.jpg',
    imageAlt: 'Cegmag Solutions company logo'
  }
];
