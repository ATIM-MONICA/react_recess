import React from 'react';
import './GreetCard.css';

function GreetingCard(props){
    // console.log(name, 'name')
    return (
     <div className='card'>
     
        <div>
           <h2>Congratulations, <span>{props.name}</span>!</h2>
           <p>You're {props.age} years old, and we're excited to have you join our learning community!</p>
           <p>This year will be filled with new discoveries and friendships.</p>
           <p>{props.school} wishes you all the best on your journey.</p>
           <p>Celebrate your first day at <strong>{props.address}</strong>!</p>
        </div>

     </div>
        
  );
}

export default GreetingCard;
              