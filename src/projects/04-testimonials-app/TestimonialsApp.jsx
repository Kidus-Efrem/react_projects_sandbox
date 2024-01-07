import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import {BsDisplay, BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {FaUserAlt} from "react-icons/fa"

export default function TestimonialsApp() {
  return (
	<div className='container m-auto text-align'>
		<Title text={"Testimonials App"}/>
		<Button  text={"post"} btnClass={"btn-info mx-4 d-inline-block"} icon={<BsFillFileEarmarkPostFill/>}/>
		<Button  btnClass={"btn-info  d-inline-block"} icon={<FaUserAlt/>}/>
	</div>
  )
}
