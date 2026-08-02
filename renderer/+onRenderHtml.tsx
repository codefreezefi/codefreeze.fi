import type { ComponentType } from 'preact'
import { renderToString } from 'preact-render-to-string'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import { Layout } from './Layout.tsx'
import {
	getPageData,
	getPageDescription,
	getPageTitle,
} from './documentProps.ts'

type PageContext = {
	Page: ComponentType<Record<string, never>>
	pageProps: Record<string, never>
	data?: ReturnType<typeof getPageData>
}

const onRenderHtml = async (pageContext: PageContext) => {
	const { Page, pageProps } = pageContext
	const pageData = getPageData(pageContext)
	const pageHtml = renderToString(
		<Layout pageData={pageData}>
			<Page {...pageProps} />
		</Layout>,
	)

	const title = getPageTitle(pageContext)
	const description = getPageDescription(pageContext)

	const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="${description}" />
        <link href="https://fonts.googleapis.com/css?family=Assistant:300,800" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Supermercado+One&display=swap" rel="stylesheet" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/brands.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/solid.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/fontawesome.js"></script>
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`

	return {
		documentHtml,
		pageContext: {},
	}
}

export default onRenderHtml
