import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get xclusive Offers On Ur Email</h1>
        <p>Subscribe to our NewsletteR and stay Updated</p>
      <div>
        <input type ="email" placeholder='Your Email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}
  
export default NewsLetter
