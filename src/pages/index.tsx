import { useCallback, useMemo, useRef, useState, type CSSProperties } from 'react'
import {
	HEART_COUNT,
	PRIMARY_BASE_TEXT,
	PRIMARY_TRANSLATIONS,
} from '../constants/valentine'
import GhostButton from '../components/GhostButton'
import '../styles/valentine.css'

type HeartSpec = {
	id: number
	size: number
	left: number
	delay: number
	duration: number
	drift: number
	opacity: number
}

const createHearts = () =>
	Array.from({ length: HEART_COUNT }, (_, id) => {
		const size = 10 + Math.random() * 20
		const left = Math.random() * 100
		const delay = Math.random() * -18
		const duration = 8 + Math.random() * 8
		const drift = (Math.random() * 2 - 1) * 40
		const opacity = 0.45 + Math.random() * 0.55

		return { id, size, left, delay, duration, drift, opacity }
	})

const pickTranslation = () =>
	PRIMARY_TRANSLATIONS[
		Math.floor(Math.random() * PRIMARY_TRANSLATIONS.length)
	]

export default function IndexPage() {
	const [primaryText, setPrimaryText] = useState(PRIMARY_BASE_TEXT)
	const [primaryLang, setPrimaryLang] = useState('es')
	const [isPrimaryHover, setIsPrimaryHover] = useState(false)
	const [isAccepted, setIsAccepted] = useState(false)
	const cardRef = useRef<HTMLElement | null>(null)
	const hearts = useMemo<HeartSpec[]>(() => createHearts(), [])

	const handlePrimaryEnter = useCallback(() => {
		setIsPrimaryHover(true)
		const pick = pickTranslation()
		setPrimaryText(pick.label)
		setPrimaryLang(pick.lang)
	}, [])

	const handlePrimaryLeave = useCallback(() => {
		setIsPrimaryHover(false)
		setPrimaryText(PRIMARY_BASE_TEXT)
		setPrimaryLang('es')
	}, [])

	const handleAccept = useCallback(() => {
		setIsAccepted(true)
		setIsPrimaryHover(false)
	}, [])


	return (
		<main className="scene">
			<div className="heart-rain" aria-hidden="true">
				{hearts.map((heart) => (
					<span
						key={heart.id}
						className="heart"
						style={
							{
								'--size': `${heart.size}px`,
								'--left': `${heart.left}%`,
								'--delay': `${heart.delay}s`,
								'--duration': `${heart.duration}s`,
								'--drift': `${heart.drift}px`,
								'--alpha': heart.opacity,
							} as CSSProperties
						}
					/>
				))}
			</div>

			<section
				className={`card${isAccepted ? ' accepted' : ''}`}
				ref={cardRef}
			>
				{isAccepted ? (
					<div className="accepted-content">
						<h1 className="heart-title" aria-label="Corazon">
							&#10084;
						</h1>
						<p className="accepted-text">
							Gracias por elegirme este dia y siempre, te amo con mi vida entera
						</p>
					</div>
				) : (
					<>
						<h1>¿Quieres ser mi San Valentin?</h1>
						<div className="actions">
							<button
								className="primary"
								type="button"
								lang={primaryLang}
								onMouseEnter={handlePrimaryEnter}
								onMouseLeave={handlePrimaryLeave}
								onClick={handleAccept}
							>
								{primaryText}
							</button>
							<GhostButton
								containerRef={cardRef}
								isPaused={isPrimaryHover || isAccepted}
								label="No, no quiero"
							/>
						</div>
					</>
				)}
			</section>
		</main>
	)
}
