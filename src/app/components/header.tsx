import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import { useContactModal } from './contact-modal'

interface HeaderProps {
  status?: number
}

const Header: React.FC<HeaderProps> = ({ status = 1 }) => {
  const { openModal } = useContactModal()
  const router = useRouter()

  return (
    <div className={`sw-header${status === 1 ? ' sw-header-secondary' : ''}`}>
      <div className="sw-logo" onClick={() => router.push('/')} role="button" aria-label="Home" style={{ cursor: 'pointer' }}>
        <Image
          src={status === 1 ? '/images/finace_logo_white.png' : '/images/finace_logo.png'}
          alt="logo"
          width={150}
          height={40}
        />
      </div>
      <Button type="primary" onClick={openModal} className="sw-header-button-primary">
        Холбоо барих
      </Button>
    </div>
  )
}

export default Header
