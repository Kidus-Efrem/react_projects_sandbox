import React from 'react'
import Title from '../components/Title'
import {AiFillSmile, AiFillHeart, AiOutlineHeart,AiOutlineComment} from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.min.css'
import dogyDog from "./img/dog.webp"
export default function LikePhotoApp() {
	let liked=false;
  return (
	<div className='container text-align'>
	<Title text="Like photo App"/>
	<Title className={"sub-header"} text="Likes"/>
	<div
	className='card bg-dark text-white m-auto'
	style={{width:300, cursor:"pointer"}}

	>
	<div className="card-head fs-3">
		<AiFillSmile className='me-3'/>
		<small>DogyDog</small>
	</div>
	<img src={dogyDog} alt="img" />
	<div className="card-footer fs-3 d-flex"
style={{justifyContent:"space-between"}}
	>
		<AiOutlineComment />{liked?(<AiFillHeart className='text-danger'/>):<AiOutlineHeart/>}
	</div>
	</div>
	</div>
  )
}
