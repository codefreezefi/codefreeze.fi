export const toggleMenu = (): void => {
	const nav = document.getElementById('main-nav')
	if (!nav) return
	if (nav.className.includes('visible')) {
		nav.className = nav.className.replace('visible', '').trim()
	} else {
		nav.className = `${nav.className} visible`.trim()
	}
}

export const closeMenu = (): void => {
	const nav = document.getElementById('main-nav')
	if (!nav) return
	nav.className = nav.className.replace('visible', '').trim()
}

export const handleNavClick = (): void => {
	closeMenu()
}
