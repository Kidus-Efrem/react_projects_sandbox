import React from 'react'
import Title from '../components/Title'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function LikePhotoApp() {
  return (
	<div className='container text-align'>
	<Title text="Like photo App"/>
	<Title className={"sub-header"} text="Likes"/>
	<div
	className='card card-dark m-auto'
	style={{width:300, cursor:"pointer"}}

	>
	<div className="card-header fs-xl">
		<small>DogyDog</small>
	</div>
	<img src="" alt="img" />
	<div className="card-footer fs-xl d-flex"
style={{justifyContent:"space-between"}}
	></div>
	</div>
	</div>
  )
}
