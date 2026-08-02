import type { ComponentChildren } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import './participants.css'

type Profile = {
	github?: string
	homepage?: string
	linkedin?: string
	mastodon?: string
	matrix?: string
	name: string
	photoThumbnail?: string
	pronouns?: string
}

const PARTICIPANTS_URL =
	'https://ruj56hpsooydu4jmctx5u7gdra0mbszw.lambda-url.eu-north-1.on.aws/?codefreeze=2027'

export const Participants = (): preact.JSX.Element => {
	const [profiles, setProfiles] = useState<Profile[]>([])

	useEffect(() => {
		void (async (): Promise<void> => {
			try {
				const res = await fetch(PARTICIPANTS_URL)
				const participants = (await res.json()) as Profile[]
				setProfiles(participants.sort((a, b) => a.name.localeCompare(b.name)))
			} catch (error: unknown) {
				console.error(error)
			}
		})()
	}, [])

	return (
		<section id="participants-container" class="participants">
			{profiles.map((profile) => (
				<Participant key={profile.name} profile={profile} />
			))}
		</section>
	)
}

const Participant = ({ profile }: { profile: Profile }): preact.JSX.Element => (
	<div class="participant">
		<img
			class="avatar"
			src={profile.photoThumbnail ?? '/images/avatar.jpg'}
			alt={profile.name}
		/>
		<h3>
			{profile.name}
			{profile.pronouns !== undefined && profile.pronouns !== '' && (
				<small>
					<br />
					{profile.pronouns}
				</small>
			)}
		</h3>
		<nav>
			{profile.homepage !== undefined && profile.homepage !== '' && (
				<ProfileLink
					icon={<i class="fas fa-home"></i>}
					href={profile.homepage}
					title={`Homepage of ${profile.name}`}
				/>
			)}
			{profile.linkedin !== undefined && profile.linkedin !== '' && (
				<ProfileLink
					icon={<i class="fab fa-linkedin"></i>}
					href={profile.linkedin}
					title={`${profile.name}'s LinkedIn profile`}
				/>
			)}
			{profile.mastodon !== undefined && profile.mastodon !== '' && (
				<ProfileLink
					icon={<img src="/logos/mastodon.svg" alt="mastodon" class="icon" />}
					href={profile.mastodon}
					title={`${profile.name} on Mastodon`}
				/>
			)}
			{profile.matrix !== undefined && profile.matrix !== '' && (
				<ProfileLink
					icon={<img src="/logos/matrix.svg" alt="matrix" class="icon" />}
					href={profile.matrix}
					title={`${profile.name} on Matrix`}
				/>
			)}
			{profile.github !== undefined && profile.github !== '' && (
				<ProfileLink
					icon={<i class="fab fa-github"></i>}
					href={profile.github}
					title={`${profile.name} on GitHub`}
				/>
			)}
		</nav>
	</div>
)

const ProfileLink = ({
	href,
	title,
	icon,
}: {
	href: string
	title: string
	icon: ComponentChildren
}): preact.JSX.Element => (
	<a href={href} target="_blank" rel="noopener noreferrer" title={title}>
		{icon}
	</a>
)
