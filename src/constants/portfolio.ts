export type PortfolioItem = {
  title: string;
  imagePath: string;
  imageAlt: string;
  icons: {
    name: string;
    description?: string;
    className?: string;
    title?: string;
    href?: string;
  }[];
};

export const PORFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: '@gee-ui/react',
    imagePath: '/src/assets/portfolio/shadcn.png',
    imageAlt: 'shadcn/ui logo',
    icons: [
      {
        name: 'mdi:star',
        className: 'text-yellow-400',
        title: 'Featured'
      },
      {
        name: 'mdi:computer',
        className: 'text-green-600',
        title: 'Active'
      },
      {
        name: 'mdi:info',
        description:
          'React (TypeScript) component library which serves as a wrapper library around shadcn/ui. Unlock the same ease of use and customization for all components but with a single source of truth library.'
      },
      {
        name: 'mdi:github',
        href: 'https://github.com/michael-gee/gee-ui'
      },
      {
        name: 'mdi:external-link',
        href: 'https://www.gee-ui.com'
      }
    ]
  },
  {
    title: 'communitils',
    imagePath: '/src/assets/portfolio/communitils.png',
    imageAlt:
      'communitils - An open-source TypeScript utility library focused on breaking into open-source technology while inviting others to do the same',
    icons: [
      {
        name: 'mdi:star',
        className: 'text-yellow-400',
        title: 'Featured'
      },
      {
        name: 'mdi:computer',
        className: 'text-green-600',
        title: 'Active'
      },
      {
        name: 'mdi:info',
        description:
          'An open-source TypeScript utility library focused on breaking into open-source technology while inviting others to do the same. This is my first dive into maintaining an open-source repository and I am excited to see where it goes. It is designed to be easy to use, easy to understand, easy to contribute to, and designed to be a learning tool for those who are new to open-source.'
      },
      {
        name: 'mdi:github',
        href: 'https://github.com/michael-gee/communitils'
      },
      {
        name: 'mdi:external-link',
        href: 'https://communitils.com'
      }
    ]
  },
  {
    title: 'PlayOn HQ',
    imagePath: '/src/assets/portfolio/playon-hq.png',
    imageAlt: 'PlayOn HQ - Event Administration Built for Schools',
    icons: [
      {
        name: 'mdi:computer',
        className: 'text-green-600',
        title: 'Active'
      },
      {
        name: 'mdi:info',
        description:
          'PlayOn HQ is a comprehensive enterprise-level event administration platform built for schools providing a seamless experience for event management, digital ticketing, and more. It includes a large toolbox of features while keeping the user-experience intuitive. Over time the project transitioned from a heavy monolith to a lean and scalable monorepo which has powerful solutions involving advanced form and server state management.'
      },
      {
        name: 'mdi:external-link',
        href: 'https://playonsports.com/hq'
      }
    ]
  },
  {
    title: 'PlayOn Mobile HQ',
    imagePath: '/src/assets/portfolio/mobile-hq.png',
    imageAlt: 'PlayOn HQ Mobile - Event Management and Digital Ticketing for Schools',
    icons: [
      {
        name: 'mdi:computer',
        className: 'text-green-600',
        title: 'Active'
      },
      {
        name: 'mdi:info',
        description:
          'PlayOn HQ Mobile is "lite" version of PlayOn HQ, providing a similar seamless experience for event management except it is designed to be used on the go and is optimized for mobile devices. It is focused on quick actions with easy access to the most important features along with the assumption that you might not have the best internet connection. No subdomain or app download required, just visit the same URL as PlayOn HQ and it will automatically detect your device and adjust accordingly.'
      }
    ]
  },
  {
    title: 'CoreView Workflow',
    imagePath: '/src/assets/portfolio/coreflow.png',
    imageAlt: 'CoreView workflow visual example',
    icons: [
      {
        name: 'mdi:archive',
        className: 'text-gray-500',
        title: 'Archive'
      },
      {
        name: 'mdi:info',
        description:
          'CoreView Workflow is a powerful tool that allows you manage complex workflows with ease. It provides a visual workflow builder that allows you to compose a rich set of actions and conditions that can be used to create powerful workflows. Includes many state-of-the-art features such as drag-and-drop, dynamic run-time inputs to resuse throughout the workflow, easy to understand validations, output/input carried between actions, and more.'
      },
      {
        name: 'mdi:external-link',
        href: 'https://www.coreview.com/user-management'
      }
    ]
  },
  {
    title: 'Zilla - Marketing Site',
    imagePath: '/src/assets/portfolio/zilla.png',
    imageAlt: 'Zilla company logo',
    icons: [
      {
        name: 'mdi:archive',
        className: 'text-gray-500',
        title: 'Archive'
      },
      {
        name: 'mdi:info',
        description:
          'Zilla is a marketing site that was built to showcase the Zilla product and its features. Built using the latest web technologies, designed to be responsive and accessible, and to be SEO friendly and optimized for performance.'
      },
      {
        name: 'mdi:external-link',
        href: 'https://zilla-site.vercel.app/'
      }
    ]
  },
  {
    title: 'Microfrontend POC',
    imagePath: '/src/assets/portfolio/module-federation.png',
    imageAlt: 'Module Federation logo',
    icons: [
      {
        name: 'mdi:archive',
        className: 'text-gray-500',
        title: 'Archive'
      },
      {
        name: 'mdi:info',
        description:
          'Microfrontends proof of concept and real world example using Module Federation integrated with Vite React applications. It was used as a demo presentation to talk alongside explaining the different use cases and benefits of using microfrontends.'
      },
      {
        name: 'mdi:external-link',
        href: 'https://d1yi08v6dkeqkz.cloudfront.net/'
      }
    ]
  }
];
