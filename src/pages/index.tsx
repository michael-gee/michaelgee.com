import { Intro, IntroTileSection, IntroTile } from '@/components/home/Intro'
import { TechStack, TechStackSection } from '@/components/home/TechStack'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import { HoverIcon } from '@/components/HoverIcon'
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
						<HoverIcon icon={icons.react} name="React" size="2em" />
						<HoverIcon icon={icons.nextjs} name="Next.js" size="2em" />
						<HoverIcon icon={icons.typescript} name="TypeScript" size="2em" />
						<HoverIcon icon={icons.javascript} name="JavaScript" size="2em" />
						<HoverIcon icon={icons.html} name="HTML 5" size="2em" />
						<HoverIcon icon={icons.css} name="CSS 3" size="2em" />
						<HoverIcon icon={icons.sass} name="SASS (CSS)" size="2em" />
					</TechStackSection>
					<TechStackSection title="Back-End">
						<HoverIcon icon={icons.nodejs} name="Node.js" size="2em" />
						<HoverIcon icon={icons.typescript} name="TypeScript" size="2em" />
						<HoverIcon icon={icons.graphQL} name="Graph QL" size="2em" />
						<HoverIcon icon={icons.wordpress} name="WordPress" size="2em" />
						<HoverIcon icon={icons.cSharp} name="C#" size="2em" />
						<HoverIcon icon={icons.dotNet} name=".NET (Core)" size="2em" />
					</TechStackSection>
					<TechStackSection title="Cloud">
						<HoverIcon icon={icons.aws} name="Amazon Web Services" size="2em" />
						<HoverIcon icon={icons.azure} name="Microsoft Azure" size="2em" />
						<HoverIcon icon={icons.mongodb} name="MongoDB Atlas" size="2em" />
						<HoverIcon icon={icons.serverless} name="Serverless Framework" />
					</TechStackSection>
				</TechStack>
			</Container>
		</>
	)
}

export default Homepage
