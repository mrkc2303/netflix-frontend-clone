import React, { useEffect } from 'react'
import netflixLogo from '../assets/netflix-logo.png'
import { Icon } from '@iconify/react';

function Header() {
  const [theme, setTheme] = React.useState("dark");
  function switchTheme() {
    console.log("Switching theme")
    if(theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }

  useEffect(() => {
    var currDate = new Date(),
    currHour = currDate.getHours();

    if(currHour >= 20 || currHour < 7) {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }, [])

  return (
    <div className="headerComponent">
        <img src={netflixLogo} alt='Netflix Logo'/>
        <div>
            <button onClick={switchTheme}>
              <Icon icon="fluent:dark-theme-24-regular"  width="24"  height="24"/>
            </button>
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