import { Intro, IntroTileSection, IntroTile } from '@/components/home/Intro'
import { TechStack, TechStackSection, TechStackIcon } from '@/components/home/TechStack'
import * as icons from '@/components/home/icons'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'

const Homepage = () => {
	return (
		<>
			<PageHead
				title="Michael Gee"
				description="Michael Gee is a full-stack software developer eager to build, learn, and share web development projects along with turning ideas into applications."
				url="https://michaelgee.com"
			/>

			<Container>
				<Intro>
					<IntroTileSection mt="32px">
						<IntroTile
							title="Coding"
							icon={icons.code}
							desc="I consider myself lucky that I get to wake up and do what I love every day. Code is just the tool to solve challenging problems while bringing interesting ideas to life."
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
							desc="Participating in communities like the React Podcast Discord and others is extremely important to me and has led me to meeting great like-minded friends."
						/>
						<IntroTile
							title="Consulting"
							icon={icons.devices}
							desc="It is important now more than ever to provide ideal user experiences online. I create, mentor, and contribute heavily to professional grade apps and code repositories."
						/>
						<IntroTile
							title="Golfing"
							icon={icons.golf}
							desc="When I'm not coding you can often find me enjoying my favorite pastime. I love the mental challenge and enjoying some relaxation time outside with friends."
						/>
					</IntroTileSection>
				</Intro>

				<PageTitle title="Tech Stack" />
				<TechStack>
					<TechStackSection title="Front-End">
						<TechStackIcon icon={icons.react} iconName="React" />
						<TechStackIcon icon={icons.nextjs} iconName="Next.js" />
						<TechStackIcon icon={icons.typescript} iconName="TypeScript" />
						<TechStackIcon icon={icons.javascript} iconName="JavaScript" />
						<TechStackIcon icon={icons.html} iconName="HTML 5" />
						<TechStackIcon icon={icons.css} iconName="CSS 3" />
						<TechStackIcon icon={icons.sass} iconName="SASS (CSS)" />
					</TechStackSection>

					<TechStackSection title="Back-End">
						<TechStackIcon icon={icons.nodejs} iconName="Node.js" />
						<TechStackIcon icon={icons.typescript} iconName="TypeScript" />
						<TechStackIcon icon={icons.graphQL} iconName="Graph QL" />
						<TechStackIcon icon={icons.wordpress} iconName="WordPress" />
						<TechStackIcon icon={icons.cSharp} iconName="C#" />
						<TechStackIcon icon={icons.dotNet} iconName=".NET (Core)" />
					</TechStackSection>

					<TechStackSection title="Cloud">
						<TechStackIcon icon={icons.aws} iconName="Amazon Web Services" />
						<TechStackIcon icon={icons.azure} iconName="Microsoft Azure" />
						<TechStackIcon icon={icons.mongodb} iconName="MongoDB Atlas" />
						<TechStackIcon icon={icons.serverless} iconName="Serverless Framework" size="1.6em" />
					</TechStackSection>
				</TechStack>
			</Container>
		</>
	)
}

export default Homepage
