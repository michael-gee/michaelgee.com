import { Container } from './Container'
import { Flex, Spinner } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface Props {
	isLoading: boolean
	children: React.ReactNode
}

export const PageContent = (props: Props) => {
	const [renderAfterDelay, setRenderAfterDelay] = useState(true)

	useEffect(() => {
		if (props.isLoading) {
			setTimeout(() => {
				setRenderAfterDelay(true)
			}, 1000)
		}
		return () => {
			setRenderAfterDelay(false)
		}
	}, [props.isLoading])

	return (
		<>
			{!props.isLoading ? (
				props.children
			) : (
				<Container>
					{renderAfterDelay && (
						<Flex justify="center" my="40px">
							<Spinner size="lg" label="Loading Spinner" speed="0.65s" />
						</Flex>
					)}
				</Container>
			)}
		</>
	)
}
