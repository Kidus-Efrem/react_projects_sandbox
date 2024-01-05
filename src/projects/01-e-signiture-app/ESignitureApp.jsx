import React, { useState } from 'react'
import Title from '../components/Title'


export default function EsignigtureApp() {
  const inputStyle = {
    border:"none",
    borderBottome:"10px dotted",
    outline: "none",
    padding:".35rem 0",
  }
  div
  document.body.style.backgroud = "#eee"
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  function handleDate(event){
    var calander = event.target.value
    setDate(calander)
  }
  function handleChange(event){
    var header = event.target.value
    setTitle(header)
  }
  return (
    <div className='container text-align'>
    <Title text={title} />
    <Title text={!date?"Date":date} classes={"sub-header"}/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <footer
     style={
     { justifyContent: "space-around",
      position: "relative",
      top: "40vh",
     }
     }
    >
    <input type="date" value={date}  className='input-group input-field input-lable' style={inputStyle} onChange={handleDate}/>
    <input type="text" value={title}  placeholder="name" onChange={handleChange} style={inputStyle}className='input-group input-field input-lable'/>
    </footer>
    </div>
  )
}
