import { Box, Flex, Heading, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react'
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
	SiSass,
	SiServerless,
	SiTailwindcss,
	SiTypescript,
	SiWordpress
} from 'react-icons/si'
import { IconType } from 'react-icons/lib'

export const TechStack = () => {
	return (
		<Box py={['8px', '16px']}>
			<TechStackSection title="Front-End">
				<TechStackIcon icon={SiReact} iconName="React" />
				<TechStackIcon icon={SiNextDotJs} iconName="Next.js" />
				<TechStackIcon icon={SiTypescript} iconName="TypeScript" />
				<TechStackIcon icon={SiJavascript} iconName="JavaScript" />
				<TechStackIcon icon={SiHtml5} iconName="HTML 5" />
				<TechStackIcon icon={SiCss3} iconName="CSS 3" />
				<TechStackIcon icon={SiTailwindcss} iconName="Tailwind CSS" />
				<TechStackIcon icon={SiSass} iconName="SASS (CSS)" />
			</TechStackSection>

			<TechStackSection title="Back-End">
				<TechStackIcon icon={SiNodeDotJs} iconName="Node.js" />
				<TechStackIcon icon={SiTypescript} iconName="TypeScript" />
				<TechStackIcon icon={SiGraphql} iconName="Graph QL" />
				<TechStackIcon icon={SiWordpress} iconName="WordPress" />
				<TechStackIcon icon={SiCsharp} iconName="C#" />
				<TechStackIcon icon={SiDotNet} iconName=".NET (Core)" />
			</TechStackSection>

			<TechStackSection title="Cloud">
				<TechStackIcon icon={SiAmazonaws} iconName="Amazon Web Services" />
				<TechStackIcon icon={SiMicrosoftazure} iconName="Microsoft Azure" />
				<TechStackIcon icon={SiMongodb} iconName="MongoDB Atlas" />
				<TechStackIcon icon={SiServerless} iconName="Serverless Framework" size="1.6em" />
			</TechStackSection>
		</Box>
	)
}

// ***** TechStackSection *****
interface TechStackSectionProps {
	title: string
	children?: React.ReactNode
}

const TechStackSection = (props: TechStackSectionProps) => {
	return (
		<Flex as="section" flexDir={['column', 'row']} py={['8px', '24px']}>
			<Heading
				as="h3"
				size="lg"
				minW="164px"
				fontWeight="normal"
				pb={['16px', '16px', '0']}
				textAlign={['center', 'center', 'start']}
				fontStyle="italic"
			>
				{props.title}
			</Heading>

			<Flex w="100%" wrap="wrap" align="center" justify="space-evenly">
				{props.children}
			</Flex>
		</Flex>
	)
}

// ***** TechStackIcon *****
interface TechStackIconProps {
	icon: IconType
	iconName: string
	size?: string
}

const TechStackIcon = (props: TechStackIconProps) => {
	const color = useColorModeValue('primary.light', 'primary.dark')
	const iconSize = props.size ? props.size : '2em'

	return (
		<Tooltip label={props.iconName} placement="bottom" aria-label={props.iconName}>
			<Box as="span">
				<Icon as={props.icon} color={color} fontSize={iconSize} />
			</Box>
		</Tooltip>
	)
}
