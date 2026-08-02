import matter from 'gray-matter'
import { marked } from 'marked'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import type { Plugin, ResolvedConfig } from 'vite'

type StatusAuthor = {
	name: string
	twitter: string
}

type StatusFrontmatter = {
	author: StatusAuthor
	date: string
	media: string[]
}

type StatusEntry = {
	author: StatusAuthor
	date: string
	media: string[]
	content: string
}

const generateStatusJson = (root: string): void => {
	const statusDir = path.join(root, '_status')
	const publicDir = path.join(root, 'public')

	const files = fs.readdirSync(statusDir).filter((file) => file.endsWith('.md'))
	const status: StatusEntry[] = files.map((file) => {
		const filePath = path.join(statusDir, file)
		const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
		const frontmatter = data as StatusFrontmatter
		return {
			author: frontmatter.author,
			date: frontmatter.date,
			media: frontmatter.media,
			content: marked.parse(content.trim()) as string,
		}
	})

	fs.mkdirSync(publicDir, { recursive: true })
	fs.writeFileSync(
		path.join(publicDir, 'status.json'),
		JSON.stringify(status, null, 0),
	)
}

export const statusJsonPlugin = (): Plugin => {
	let root = process.cwd()

	return {
		name: 'status-json',
		configResolved: (config: ResolvedConfig) => {
			root = String(config.root)
		},
		buildStart: () => {
			generateStatusJson(root)
		},
		configureServer: () => {
			generateStatusJson(root)
		},
	}
}
