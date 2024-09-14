import React, { useState } from "react";


function Card({id,info,name,image,price, removeTour}){

  const [readmore ,setReadmore] = useState(false)
  const Description = readmore ? info : `${info.substring(0,200)}...`;

  function readmodeHandler(){
        setReadmore(!readmore);
  }

return(
    <div className="card">
        
        <img  className="image" src={image} alt="This is Image"></img>
        <div className="tour-details">
        <div className="tour-info">
        <p className="name">{name}</p>
        <p className="price">₹ {price}</p>
        </div>
        <div className="description">
          {Description}
          <span className="read-more" onClick={readmodeHandler}>
             {readmore ?  `Show Less`: `Read More`}
          </span>
        </div>  
        </div>

        <button className="btn-red" onClick={()=> removeTour(id)}>Not Interested</button>
    </div>
)


}

export default Card;