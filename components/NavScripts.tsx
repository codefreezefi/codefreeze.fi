import { useEffect } from 'preact/hooks'

const MAP_SRC =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6030157.151980942!2d18.496274062793045!3d68.34660796508547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45cd5b14f6dd1919%3A0x8a4f8186f405e675!2zU3VvbWVuIExhdHUgS2lpbG9ww6TDpC9GZWxsIENlbnRyZSBLaWlsb3DDpMOk!5e0!3m2!1sde!2sfi!4v1516450974145'

type NavScriptsProps = {
	showMap?: boolean
}

export const NavScripts = ({ showMap = false }: NavScriptsProps): null => {
	useEffect(() => {
		const mainNav = document.getElementById('main-nav')
		const mainHeader = document.getElementById('main-header')
		if (mainNav === null || mainHeader === null) return

		let scrolling = false
		const scrollHeight = mainHeader.offsetHeight

		const onScroll = (): void => {
			if (document.documentElement.scrollTop > scrollHeight && !scrolling) {
				scrolling = true
				mainNav.className = `${mainNav.className} scrolling`.trim()
			}
			if (document.documentElement.scrollTop <= scrollHeight && scrolling) {
				scrolling = false
				mainNav.className = mainNav.className.replace('scrolling', '').trim()
			}
		}

		window.addEventListener('scroll', onScroll)

		if (showMap) {
			const mapContainer = document.getElementById('map')
			if (mapContainer?.children.length === 0) {
				const width = document.body.clientWidth
				const mapFrame = document.createElement('iframe')
				mapFrame.src = MAP_SRC
				mapFrame.width = String(width)
				mapFrame.height = String(Math.min((width / 800) * 600, 450))
				mapFrame.setAttribute('frameborder', '0')
				mapContainer.appendChild(mapFrame)
			}
		}

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [showMap])

	return null
}
