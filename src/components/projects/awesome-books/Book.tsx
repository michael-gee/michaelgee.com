import Image from 'next/image'
import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { ExpandableDescription } from './ExpandableDescription'
import { BookProps } from '@/constants/awesome-books'

interface Props extends BookProps {
	isFeatured: boolean
}

const Book = (props: Props) => {
	const displayConfig = _returnDisplayConfig(props.isFeatured)

	return (
		<Flex
			as="article"
			flexDir={['column', 'column', 'row', 'row']}
			maxW="1000px"
			m={['16px 0', '16px 0', displayConfig.margin, displayConfig.margin]}
			p={['0 8px', '0']}
		>
			<Flex
				pos="relative"
				borderRadius="4px"
				background="linear-gradient(to bottom right, #e94057, #f27121)"
				w={displayConfig.bookImgWidth}
				h={displayConfig.bookImgHeight}
				minW={displayConfig.bookImgWidth}
				minH={displayConfig.bookImgHeight}
				p={displayConfig.bookBorderSize}
				m={['0 auto 16px auto', '0 auto 32px auto', '0', '0']}
			>
				<Image
					src={props.bookImg}
					width={displayConfig.bookImgWidth}
					height={displayConfig.bookImgHeight}
				/>

				<Box
					pos="absolute"
					bottom="0"
					right={displayConfig.avatarRight}
					w={displayConfig.avatarWidth}
					h={displayConfig.avatarHeight}
					mb={displayConfig.avatarBottom}
				>
					<Image src={props.avatar} width="100px" height="100px" className="round-img" />
				</Box>
			</Flex>

			<Flex
				direction="column"
				pl={['0', '0', props.isFeatured ? '64px' : '50px', props.isFeatured ? '64px' : '50px']}
			>
				<Link href={props.bookUrl} isExternal _hover={{ opacity: 0.8 }}>
					<Heading
						as="h3"
						fontWeight="normal"
						fontSize={displayConfig.bookTitleFontSize}
						textAlign={['center', 'center', 'start', 'start']}
						bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
						bgClip="text"
						fill="transparent"
						pt={['16px', '0']}
					>
						<Box as="span">{props.title}</Box>{' '}
						<Box as="span" fontSize=".6em" fontStyle="italic">
							by {props.author}
						</Box>
					</Heading>
				</Link>

				<Flex
					justify={['center', 'center', 'space-between', 'space-between']}
					flexDirection={['column', 'column', 'row', 'row']}
					mb={['8px', '8px', '0', '0']}
					align="center"
				>
					<Heading
						as="h4"
						size={displayConfig.recommendedByFontSize}
						color="#78757f"
						fontWeight="normal"
						fontStyle="italic"
						textAlign={['center', 'center', 'start', 'start']}
						p="6px 0"
					>
						{props.guest} • {props.guestBio}
					</Heading>

					<Flex ml={['0', '0', '4px', '4px']}>
						{props.guestLinks.map((item) => {
							return (
								<Box
									as="a"
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									color="#78757f"
									m={['0 16px', '0 16px', '0 8px', '0 8px']}
									key={item.id}
								>
									{item.icon({})}
								</Box>
							)
						})}
					</Flex>
				</Flex>

				<Box
					h={displayConfig.titleBorderHeight}
					w="100%"
					background="linear-gradient(to right, #e94057, #f27121)"
					borderRadius="4px"
					mb="8px"
				/>

				<ExpandableDescription
					descPreview={props.descPreview}
					description={props.description}
					fontSize={displayConfig.descFontSize}
				/>
			</Flex>
		</Flex>
	)
}

function _returnDisplayConfig(isFeatured: boolean) {
	if (isFeatured) {
		return {
			margin: '48px auto 80px auto',

			bookImgWidth: '180px',
			bookImgHeight: '291px',
			bookBorderSize: '6px',

			avatarWidth: '100px',
			avatarHeight: '100px',
			avatarBottom: '-32px',
			avatarRight: '-48px',

			bookTitleFontSize: '1.6em',
			recommendedByFontSize: 'sm',
			titleBorderHeight: '4px',
			descFontSize: '1em'
		}
	}

	return {
		margin: '0 auto 48px auto',

		bookImgWidth: '132px',
		bookImgHeight: '188px',
		bookBorderSize: '4px',

		avatarWidth: '64px',
		avatarHeight: '64px',
		avatarBottom: '-20px',
		avatarRight: '-32px',

		bookTitleFontSize: '1.2em',
		recommendedByFontSize: 'xs',
		titleBorderHeight: '2px',
		descFontSize: '.8em'
	}
}

export { Book }
