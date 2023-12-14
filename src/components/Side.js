import React, { useEffect, useState } from 'react'
import './hole.css'

const Side = (props) => {
  const[books,setbooks]=useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await fetch(props.url)
        const data = await response.json();
        setbooks(data);
        console.log(data)
      } catch(error){
        console.error("error fetchind data:",error);
      }
    };
    fetchData();
  },[]);
  
  return (
    <div className='sidelist'>
    {books.map((book)=>(
      <div key={book.id}>
        <h3 className='side-title'>{book.Title}</h3>
        <p  className='side-title1'>{book.Author}</p><hr/>
      </div>
    ))}
    </div>
  )
}

export default Side