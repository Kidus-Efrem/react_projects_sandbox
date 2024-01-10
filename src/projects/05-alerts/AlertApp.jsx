import React from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
	<div className='container mx-0 my-3'>
		<Alert type={"success"} message={"connected successfully"}/>
	</div>
  )
}
