import React, { useState } from 'react'
import Title from '../components/Title'
import {AiFillSmile, AiFillHeart, AiOutlineHeart,AiOutlineComment} from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.min.css'
import dogyDog from "./img/dog.webp"
export default function LikePhotoApp() {
  const [like, setLike] =useState(false)
  const [count, setCount] =useState(0)
  function handleClick(event){
	if(!like){
		setLike(true)
		setCount(count+1)
	}
	else{
		setLike(false)
		setCount(count-1)
	}
  }
  return (
	<div className='container text-align'>
	<Title text="Like photo App"/>
	<Title className={"sub-header"} text={`Likes ${count}`}/>
	<div
	className='card shadow-lg bg-dark text-white m-auto'
	style={{width:300, cursor:"pointer"}}
	onDoubleClick={handleClick}

	>
	<div className="card-head fs-1">
		<AiFillSmile className='me-3'/>
		<small>DogyDog</small>
	</div>
	<img src={dogyDog} alt="img" />
	<div className="card-footer fs-1 d-flex"
style={{justifyContent:"space-between"}}
	>
		<AiOutlineComment />{like?(<AiFillHeart onClick={handleClick} className='text-danger'/>):<AiOutlineHeart onClick={handleClick}/>}
	</div>
	</div>
	</div>
  )
}
