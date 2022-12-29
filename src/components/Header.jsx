import React from 'react'
import netflixLogo from '../assets/netflix-logo.png'
import { Icon } from '@iconify/react';

function Header() {
  return (
    <div className="headerComponent">
        <img src={netflixLogo} alt='Netflix Logo'/>
        <div>
            <button>
                <Icon icon="ph:globe-bold"/>
                English
                <Icon icon="gridicons:dropdown" width="24" height="24"/>
            </button>
            <button>
                Sign In
            </button>
        </div>
    </div>
  )
}

export default Header