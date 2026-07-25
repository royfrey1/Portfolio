// src/components/ui/background-grid-beam.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export const GridBeam = ({ children, className }) => (
  <div className={cn('relative w-full h-full bg-grid overflow-hidden', className)}>
    
    {/* 1. Arriba a la Derecha (Diagonal ascendente clásica) */}
    <Beam className="top-8 left-10 scale-150" direction="top-right" duration={2} delay={0} />

    {/* 2. Abajo a la Izquierda (Diagonal descendente invertida) */}
    <Beam className="top-12 right-20 scale-185" direction="bottom-left" duration={2.7} delay={1.1} />

    {/* 3. Arriba a la Izquierda */}
    <Beam className="bottom-14 right-1/4 scale-90" direction="top-left" duration={2.2} delay={0.1} />

    {/* 4. Abajo a la Derecha */}
    <Beam className="bottom-12 left-1/3 scale-180" direction="bottom-right" duration={1.9} delay={1.8} />

    {/* 5. Extra flotante en el centro (Arriba a la Derecha rápido) */}
    <Beam className="top-1/2 left-50 scale-190" direction="top-right" duration={2.6} delay={2.5} />

    {children}
  </div>
)

// Definición de direcciones mediante combinaciones de vectores de animación para el gradient
const directionVariants = {
  'top-right': {
    initial: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' },
    animate: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' }
  },
  'bottom-left': {
    initial: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' },
    animate: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' }
  },
  'top-left': {
    initial: { x1: '10%', x2: '10%', y1: '160%', y2: '180%' },
    animate: { x1: '100%', x2: '110%', y1: '-40%', y2: '-20%' }
  },
  'bottom-right': {
    initial: { x1: '100%', x2: '110%', y1: '-40%', y2: '-20%' },
    animate: { x1: '60%', x2: '70%', y1: '160%', y2: '180%' }
  }
}

export const Beam = ({ 
  className = '', 
  duration = 2, 
  delay = 0, 
  direction = 'top-right' 
}) => {
  // Generamos un ID único por cada haz para evitar colisión de gradientes SVG
  const gradientId = React.useId()

  const variant = directionVariants[direction] || directionVariants['top-right']

  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('absolute pointer-events-none z-10 opacity-90', className)}
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke={`url(#${gradientId})`}
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id={gradientId}
          variants={{
            initial: variant.initial,
            animate: variant.animate
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: delay,
            repeatDelay: 0.5
          }}
        >
          {/* Verde Brand #3EBD00 */}
          <stop stopColor="#3EBD00" stopOpacity="0" />
          <stop stopColor="#3EBD00" />
          <stop offset="0.325" stopColor="#2D8700" />
          <stop offset="1" stopColor="#3EBD00" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}