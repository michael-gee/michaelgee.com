import { Box, Flex, Heading, Icon, Tooltip } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import {
	SiAmazonaws,
	SiCsharp,
	SiCss3,
	SiDotNet,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiMicrosoftazure,
	SiMongodb,
	SiNextDotJs,
	SiNodeDotJs,
	SiReact,
	SiServerless,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si'

export const TechStack = () => {
	return (
		<Box py={['8px', '16px']}>
			<Flex as="section" flexDir={['column', 'row']} py={['8px', '24px']}>
				<Heading
					as="h3"
					size="lg"
					minW="142px"
					fontWeight="normal"
					textAlign={['center', 'center', 'start']}
				>
					Front-End
				</Heading>

				<Flex w="100%" wrap="wrap" align="center" justify="space-evenly">
					<TechStackIcon icon={SiReact} iconName="React" />
					<TechStackIcon icon={SiNextDotJs} iconName="Next.js" />
					<TechStackIcon icon={SiTypescript} iconName="TypeScript" />
					<TechStackIcon icon={SiJavascript} iconName="JavaScript" />
					<TechStackIcon icon={SiCss3} iconName="CSS 3" />
					<TechStackIcon icon={SiTailwindcss} iconName="Tailwind CSS" />
					<TechStackIcon icon={SiHtml5} iconName="HTML 5" />
				</Flex>
			</Flex>

			<Flex as="section" flexDir={['column', 'column', 'row']} py="24px">
				<Heading
					as="h3"
					size="lg"
					minW="142px"
					fontWeight="normal"
					textAlign={['center', 'center', 'start']}
				>
					Back-End
				</Heading>

				<Flex w="100%" align="center" justify="space-evenly">
					<TechStackIcon icon={SiNodeDotJs} iconName="Node.js" />
					<TechStackIcon icon={SiTypescript} iconName="TypeScript" />
					<TechStackIcon icon={SiMongodb} iconName="MongoDB" />
					<TechStackIcon icon={SiGraphql} iconName="Graph QL" />
					<TechStackIcon icon={SiCsharp} iconName="C#" />
					<TechStackIcon icon={SiDotNet} iconName=".NET (Core)" />
				</Flex>
			</Flex>

			<Flex as="section" flexDir={['column', 'column', 'row']} py="24px">
				<Heading
					as="h3"
					size="lg"
					minW="142px"
					fontWeight="normal"
					textAlign={['center', 'center', 'start']}
				>
					Cloud
				</Heading>

				<Flex w="100%" align="center" justify="space-evenly">
					<TechStackIcon icon={SiAmazonaws} iconName="Amazon Web Services" />
					<TechStackIcon icon={SiMicrosoftazure} iconName="Microsoft Azure" />
					<TechStackIcon icon={SiServerless} iconName="Serverless Framework" size="1.6em" />
				</Flex>
			</Flex>
		</Box>
	)
}

// ***** TechStackIcon child component *****
interface TechStackIconProps {
	icon: IconType
	iconName: string
	size?: string
}

const TechStackIcon = (props: TechStackIconProps) => {
	const iconSize = props.size ? props.size : '2em'

	return (
		<Tooltip label={props.iconName} placement="bottom" aria-label={props.iconName}>
			<Box as="span">
				<Icon as={props.icon} fontSize={iconSize} />
			</Box>
		</Tooltip>
	)
}
