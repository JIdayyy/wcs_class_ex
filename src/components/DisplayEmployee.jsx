import React from 'react';



function DisplayEmployee({ quote }) {
  return (
    quote && (
      <div className='DisplayEmployee'>
       <img src={quote.image} alt="" />
        <ul>
         <li>{quote.character}</li>
         <li>{quote.characterDirection}</li>
         <li>{quote.quote}</li>
        </ul>
      </div>
    )
  );
}

export default DisplayEmployee;