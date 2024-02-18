import React from 'react'
import SliderComp from './SliderComp'
import Title from '../components/Title'
export default function SliderApp() {
  return (
	<div className='container text-center'>
	  <Title text={"Slide to grow"}/>
	  <SliderComp/>
	</div>
  )
}
