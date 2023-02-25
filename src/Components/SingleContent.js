import React from 'react'
import { img_300, img_500,unavailable } from './config'
import './SingleContent.css';
import Badge from '@mui/material/Badge';

function SingleContent({id,poster,date,media_type,vote_average,title}) {
  return (

    


<div className='poster_wrapper'>
<Badge badgeContent={vote_average} color="primary"/>
      
   
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className='title'>{title}</b>
          
           <span className='subtitle'>{media_type==="movie" ? "Movie" : "TV Series"}
           <span>{date}</span>
           </span>
         
    </div>
   
   
    
  
  )
}

export default SingleContent