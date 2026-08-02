import { useEffect, useState } from 'preact/hooks'
import './status.css'

type StatusEntry = {
	author: {
		name: string
		twitter: string
	}
	date: string
	media: string[]
	content: string
}

type MediaItem = {
	filename: string
	content: string
}

export const StatusGallery = (): preact.JSX.Element => {
	const [media, setMedia] = useState<MediaItem[]>([])

	useEffect(() => {
		void (async (): Promise<void> => {
			try {
				const res = await fetch('/status.json')
				const status = (await res.json()) as StatusEntry[]
				const allMedia = status
					.map(({ media: files, content }) =>
						(files ?? []).map((filename) => ({ filename, content })),
					)
					.flat()
					.filter((item) => !item.filename.endsWith('mp4'))
					.sort(() => (Math.random() > 0.5 ? 1 : -1))
					.slice(0, 10)
				setMedia(allMedia)
			} catch (error: unknown) {
				console.error(error)
			}
		})()
	}, [])

	return (
		<section id="status" class="status">
			<div class="gallery">
				{media.map((item) => (
					<Media
						key={item.filename}
						filename={item.filename}
						content={item.content}
					/>
				))}
			</div>
		</section>
	)
}

const Media = ({ filename, content }: MediaItem): preact.JSX.Element => (
	<div
		style={{
			backgroundImage: `url(/images/status/thumb-500-${filename})`,
		}}
	>
		<div
			class="content"
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		/>
	</div>
)
