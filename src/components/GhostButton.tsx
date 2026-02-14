import { useCallback, useEffect, useRef, useState } from 'react'
import { MAX_OFFSET, REPEL_RADIUS } from '../constants/valentine'

type GhostButtonProps = {
  containerRef: React.RefObject<HTMLElement | null>
  isPaused?: boolean
  label: string
  className?: string
  repelRadius?: number
  maxOffset?: number
}

export default function GhostButton({
  containerRef,
  isPaused = false,
  label,
  className = 'ghost',
  repelRadius = REPEL_RADIUS,
  maxOffset = MAX_OFFSET,
}: GhostButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const reset = useCallback(() => {
    setOffset((prev) => (prev.x === 0 && prev.y === 0 ? prev : { x: 0, y: 0 }))
  }, [])

  const handleMove = useCallback(
    (event: MouseEvent) => {
      if (isPaused) {
        reset()
        return
      }
      const target = buttonRef.current
      if (!target) return

      const rect = target.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = event.clientX - centerX
      const dy = event.clientY - centerY
      const distance = Math.hypot(dx, dy)

      if (distance > repelRadius) {
        reset()
        return
      }

      const strength = (repelRadius - distance) / repelRadius
      const pushX = -(dx / (distance || 1)) * maxOffset * strength
      const pushY = -(dy / (distance || 1)) * maxOffset * strength
      setOffset({ x: pushX, y: pushY })
    },
    [isPaused, maxOffset, repelRadius, reset],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMove = (event: MouseEvent) => handleMove(event)
    const onLeave = () => reset()

    container.addEventListener('mousemove', onMove)
    container.addEventListener('mouseleave', onLeave)

    return () => {
      container.removeEventListener('mousemove', onMove)
      container.removeEventListener('mouseleave', onLeave)
    }
  }, [containerRef, handleMove, reset])

  return (
    <button
      className={className}
      type="button"
      ref={buttonRef}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {label}
    </button>
  )
}
