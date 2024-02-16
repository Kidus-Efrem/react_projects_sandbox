import React,{useEffect, useState} from 'react'
import Blog from './Blog'
import { ThemesContext, themes } from './contex/theme-context'
export default function LightAndDarkMode() {
	const [theme, setTheme] = useState(themes.dark)

	function changeTheme(){
			theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
	}
	useEffect(()=>{
		let docbody = document.body;
		switch(theme){
			case themes.light:
				docbody.classList.remove("bg-dark")
				docbody.classList.remove("text-light")
				docbody.classList.add("bg-light")
				docbody.classList.add("text-dark")

				break
			case themes.dark:
				docbody.classList.remove("bg-light")
				docbody.classList.remove("text-dark")
				docbody.classList.add("bg-dark")
				docbody.classList.add("text-add")

				break
		}
	}, [theme])
  return (
	<ThemesContext.Provider value={{theme, changeTheme}}>
	<Blog/>
	</ThemesContext.Provider>
  )
}
