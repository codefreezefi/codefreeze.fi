import type { ComponentChildren } from 'preact'
import { NavScripts } from '../components/NavScripts.tsx'
import '../styles/2018.scss'
import { PageShell } from './PageShell.tsx'
import type { PageData } from './documentProps.ts'

type LayoutProps = {
	children: ComponentChildren
	pageData: PageData
}

export const Layout = ({
	children,
	pageData,
}: LayoutProps): preact.JSX.Element => (
	<>
		<PageShell pageData={pageData}>{children}</PageShell>
		<NavScripts showMap={pageData.layout === 'home'} />
	</>
)
