import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { Fade, Box, Text } from '@chakra-ui/react'
import { Intro, IntroTileSection, IntroTile } from '@/components/home/Intro'
import { TechStack, TechStackSection, TechStackIcon } from '@/components/home/TechStack'
import { CurrentInterests } from '@/components/home/CurrentInterests'
import { SubscriptionForm } from '@/components/home/SubscriptionForm'
import * as icons from '@/components/home/icons'

const Homepage = () => {
	return (
		<>
			<PageHead
				title="Michael Gee"
				description="Michael Gee's personal website that consists of his professional & personal interests, projects, and findings primarily focused on software development."
				url="https://michaelgee.com"
			/>

			<Container>
				<Fade in transition={{ enter: { duration: 1.2 } }}>
					<Intro>
						<IntroTileSection mt="32px">
							<IntroTile
								title="Coding"
								icon={icons.code}
								desc="I consider myself lucky that I get to wake up and do what I love every day. Code is just the tool to solve challenging problems while bringing interesting application ideas to life."
							/>
							<IntroTile
								title="Learning"
								icon={icons.university}
								desc="With a strong passion for continuous learning I am always looking for new to ways to expand upon my developer journey while staying open-minded to new tech and ideas."
							/>
							<IntroTile
								title="Blogging"
								icon={icons.pencil}
								desc="I am in no way a writer but I love to share my past experiences and things I have learned. I hope that some people can benefit from them and provide valuable feedback."
							/>
						</IntroTileSection>

						<IntroTileSection my={['0', '16px']}>
							<IntroTile
								title="Collaborating"
								icon={icons.discord}
								desc="Participating in communities like the React Podcast Discord and others continues to be extremely important to me and has led me to meeting great like-minded friends."
							/>
							<IntroTile
								title="Consulting"
								icon={icons.devices}
								desc="It is important now more than ever to provide ideal user experiences online. I create, mentor, and contribute heavily to professional grade apps and code repositories."
							/>
							<IntroTile
								title="Golfing"
								icon={icons.golf}
								desc="When I'm not coding you can often find me enjoying my favorite pastime playing golf. I love the mental challenge and enjoying some relaxation time outside with friends."
							/>
						</IntroTileSection>
					</Intro>

					<TechStack>
						<TechStackSection title="Proficiency" pos="left">
							<TechStackIcon name="React" icon={icons.react} />
							<TechStackIcon name="Next.js" icon={icons.nextjs} />
							<TechStackIcon name="TypeScript" icon={icons.typescript} />
							<TechStackIcon name="SCSS" icon={icons.sass} />
							<TechStackIcon name="Node.js" icon={icons.nodejs} />
							<TechStackIcon name="Git" icon={icons.git} />
						</TechStackSection>
						<TechStackSection title="Discovery" pos="right">
							<TechStackIcon name="React Native" icon={icons.react} />
							<TechStackIcon name="AWS" icon={icons.aws} />
							<TechStackIcon name="Supabase" icon={icons.supabase} />
							<TechStackIcon name="Prisma" icon={icons.prisma} />
							<TechStackIcon name="PostgreSQL" icon={icons.postgreSQL} />
						</TechStackSection>
					</TechStack>

					<CurrentInterests />

					<Box pt="8px" pb="16px" fontSize="1.2em" textAlign="center">
						<Text as="p" fontWeight="bold">
							Subscribe to my newsletter!
						</Text>
						<Text as="p" fontSize=".8em" maxW="600px" mx="auto">
							Get notified when I announce major updates about all content including blog posts,
							memes, projects, and hopefully video content (coming soon)
						</Text>

						<SubscriptionForm />
					</Box>
				</Fade>
			</Container>
		</>
	)
}

export default Homepage
