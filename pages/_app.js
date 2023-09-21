import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if(theme === "dark"){
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  },[theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return <div className="place-items-center">
    <Navbar handleChangeTheme={handleChangeTheme} theme={theme} />
    <Component {...pageProps} />
  </ div>
}
