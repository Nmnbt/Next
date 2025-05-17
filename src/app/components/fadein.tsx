'use client'

import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll'

interface FadeInProps {
  children: React.ReactNode
  sectionId: string
}

const FadeIn = ({ children, sectionId }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(sectionId)
      if (element) {
        const scrollPosition = window.scrollY + window.innerHeight
        const elementPosition = element.offsetTop
        if (scrollPosition > elementPosition) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionId])

  return (
    <Element
      name={sectionId}
      id={sectionId}
      className={`fade-in-container ${isVisible || sectionId === 'section1' ? 'fade-in' : ''}`}
    >
      {children}
    </Element>
  )
}

export default FadeIn
