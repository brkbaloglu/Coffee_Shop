import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Reviews() {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getAllReviews = async() => {
      const response = await axios.get("http://localhost:3000/reviews")
      setReviews(response.data)
    }
    getAllReviews()
  }, [])

  return (
    <div className='' id='reviews'>
      <h2 className='text-4xl font-bold text-center my-5'>Customer Reviews</h2>
      <div className='grid grid-cols-3'>
        {
          reviews.map((review) => (
            <div key={review.id} className='relative border-2 mx-5 border-black flex items-center justify-center flex-col h-[400px] my-5 rounded-xl'>
              <img className='w-[100px] rounded-xl' src={review.reviewUserImg} alt="" />
              <h2 className='font-semibold mb-10 mt-2'>{review.reviewUsername}</h2>
              <p className='px-2'>{review.reviewDescription}</p>
              <p className='absolute bottom-5 right-5'>{review.reviewScore}/10</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Reviews