import { hydrate, render } from 'preact'
import { Layout } from './Layout.tsx'
import { getPageData, getPageTitle } from './documentProps.ts'

type PageContext = {
	Page: (props: Record<string, never>) => preact.JSX.Element
	pageProps: Record<string, never>
	isHydration?: boolean
	data?: ReturnType<typeof getPageData>
}

const onRenderClient = async (pageContext: PageContext): Promise<void> => {
	const { Page, pageProps } = pageContext
	const pageData = getPageData(pageContext)
	const page = (
		<Layout pageData={pageData}>
			<Page {...pageProps} />
		</Layout>
	)
	const container = document.body

	if (pageContext.isHydration === true) {
		hydrate(page, container)
	} else {
		render(page, container)
	}

	document.title = getPageTitle(pageContext)
}

export default onRenderClient
