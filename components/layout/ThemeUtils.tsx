'use client'
import dynamic from 'next/dynamic'
// Import hooks from ai-solutions as default (all theme utils are identical)
import { useOffcanvasMenu } from '@/util/ai-solutions-util/offcanvasMenu'
import { useAccordion } from '@/util/ai-solutions-util/useAccordion'
import { useCircleText } from '@/util/ai-solutions-util/useCircleText'
import { useOdometerCounter } from '@/util/ai-solutions-util/useOdometerCounter'
import { useParallaxEffect } from '@/util/ai-solutions-util/useParallaxEffect'

interface ThemeUtilsProps {
	theme: string
}

export default function ThemeUtils({ theme }: ThemeUtilsProps) {
	// Call hooks at top level (React rules - hooks must be called unconditionally)
	// Since all theme utils are identical, we use ai-solutions for all
	useOffcanvasMenu()
	useAccordion()
	useCircleText()
	useOdometerCounter()
	useParallaxEffect()

	// Dynamic components for theme-specific rendering (these return JSX)
	const DataBg = dynamic(() => import(`@/util/${theme}-util/data-bg`).then(m => ({ default: m.DataBg })), { ssr: false })
	const UseTextAnimation2 = dynamic(() => import(`@/util/${theme}-util/useTextAnimation2`), { ssr: false })
	const UseTextAnimation3 = dynamic(() => import(`@/util/${theme}-util/useTextAnimation3`), { ssr: false })

	return (
		<>
			<DataBg />
			<UseTextAnimation2 />
			<UseTextAnimation3 />
		</>
	)
}
