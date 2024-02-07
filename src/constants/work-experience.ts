import playOnLogo from '@assets/work/playon_sports_logo.jpeg';
import inxLogo from '@assets/work/inx.jpg';
import coreviewLogo from '@assets/work/coreview.jpg';
import cegmagLogo from '@assets/work/cegmag.jpg';

export type WorkExperience = {
  company: string;
  position: string;
  startDateYear: string;
  endDateYear: string;
  image: ImageData;
  imageAlt: string;
};

export const workExperience: WorkExperience[] = [
  {
    company: 'PlayOn! Sports',
    position: 'Senior Frontend Software Engineer',
    startDateYear: 'Sep 2021',
    endDateYear: 'Present',
    image: playOnLogo,
    imageAlt: 'PlayOn! Sports company logo'
  },
  {
    company: 'Inxeption',
    position: 'Frontend Software Engineer',
    startDateYear: 'Feb 2021',
    endDateYear: 'Sep 2021',
    image: inxLogo,
    imageAlt: 'Inxeption company logo'
  },
  {
    company: 'CoreView',
    position: 'Software Development Engineer',
    startDateYear: 'Jul 2018',
    endDateYear: 'Feb 2021',
    image: coreviewLogo,
    imageAlt: 'CoreView company logo'
  },
  {
    company: 'Cegmag Solutions',
    position: 'Software Developer',
    startDateYear: 'Feb 2017',
    endDateYear: 'Jul 2018',
    image: cegmagLogo,
    imageAlt: 'Cegmag Solutions company logo'
  }
];
