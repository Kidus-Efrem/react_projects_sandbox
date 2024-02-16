import React, {useContext} from 'react'
import Title from '../components/Title';
import Button from '../components/Button'
import { ThemesContext } from './contex/theme-context';

export default function Blog() {
	const {theme, changeTheme} = useContext(ThemesContext)
  return (
	<div>
	  <div className="container">
		<Title text={`My Blog with ${theme} Theme`}/>
		<span style={{position:"absolute", top:10, right:10}}>
			<Button onClick={changeTheme} text={theme==="dark"?"light":"dark"} btnClass={`${theme==="dark"?"btn btn-light":"btn btn-dark"}`}/>
		</span>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
		</p>
	  </div>
	</div>
  )
}
