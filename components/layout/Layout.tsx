
'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import dynamic from 'next/dynamic'
import type { FC } from 'react'
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer from './footer/Footer'
import Header from "./header/Header"
import ThemeUtils from './ThemeUtils'
import DisableAnimations from '../common/DisableAnimations'
import GlobalFAQStyles from '../common/GlobalFAQStyles'

// Define the props interface (same as above)
interface BootstrapComponentsProps { }

interface LayoutProps {
	headerStyle?: Number
	footerStyle?: Number
	children?: React.ReactNode
	breadcrumbTitle?: string
	theme?: string
	hideLogo?: boolean
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, theme = 'ai-solutions', hideLogo }: LayoutProps) {
	const [scroll, setScroll] = useState<boolean>(false)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
	const handleMobileMenu = (): void => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
	}

	// Dynamic BootstrapComponents based on theme
	const BootstrapComponents = dynamic<BootstrapComponentsProps>(
		() => import(`@/util/${theme}-util/useBootstrap`),
		{ ssr: false } // Disable SSR since this is client-side only
	) as FC<BootstrapComponentsProps>

	useEffect(() => {
		AOS.init()
		const WOW: any = require('wowjs');
		(window as any).wow = new WOW.WOW({
			live: false
		});

		// Initialize WOW.js
		(window as any).wow.init()
		const handleScroll = (): void => {
			const scrollCheck: boolean = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scroll])


	return (
		<>
			<div id="top" />
			{/* Disable animations for all service pages */}
			{usePathname()?.startsWith('/service/') && (
				<>
					<DisableAnimations />
					<GlobalFAQStyles />
				</>
			)}
			<BootstrapComponents />
			<ThemeUtils theme={theme} />
			<Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} hideLogo={hideLogo} />

			<main>
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
				{children}
			</main>

			< Footer />

			<BackToTop />
		</>
	)
}
