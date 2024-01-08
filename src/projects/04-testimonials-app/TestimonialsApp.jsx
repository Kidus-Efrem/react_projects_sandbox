import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { BsDisplay, BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';

export default function TestimonialsApp() {
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    if (testimonials) {
      fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then(response => response.json())
        .then(json => setItems(json))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [testimonials]);

  return (
    <div className='container m-auto text-align'>
      <Title text={'Testimonials App'} />
      <Button onClick={() => setTestimonials('Posts')} text={'post'} btnClass={'btn-info mx-4 d-inline-block'} icon={<BsFillFileEarmarkPostFill />} />
      <Button onClick={() => setTestimonials('Users')} text={'Users'} btnClass={'btn-info mx-4 d-inline-block'} icon={<FaUserAlt />} />
      <Button onClick={() => setTestimonials('Comments')} text={'Comments'} btnClass={'btn-info mx-4 d-inline-block'} icon={<BiCommentDetail />} />
      <Title classes={'sub-header my-4'} text={!testimonials ? 'select from above' : testimonials} />
	  {!items ? null: items.map((item)=>{
		return(
			<div className="card card-primary mb-2">
			{item.name &&  <h2 style={{background:"lightblue"}} className="card-header">{item.name}</h2> }
			<div className="card-body">
				<h3>{item.title}</h3>
				<p>{item.body}</p>
			</div>
			{item.email && <h2 className="card-footer">{item.email}</h2> }
			</div>
			)
	})}
    </div>

  );
}
