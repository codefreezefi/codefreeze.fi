export type PageData = {
	layout?: 'home' | 'page'
	when?: string
	where?: string
	title?: string
	description?: string
}

export type PageContext = {
	data?: PageData
}

export const getPageData = (pageContext: PageContext): PageData =>
	pageContext.data ?? {}

export const getPageTitle = (pageContext: PageContext): string =>
	getPageData(pageContext).title ?? 'Codefreeze'

export const getPageDescription = (pageContext: PageContext): string =>
	getPageData(pageContext).description ?? ''
