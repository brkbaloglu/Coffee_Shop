import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Menu() {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getAllCoffees = async() => {
      const response = await axios.get("http://localhost:3000/coffees")
      setMenu(response.data)
      console.log(response);
    }
    getAllCoffees()
  }, [])

  return (
    <div className='' id='menu'>
      <h2 className='text-4xl font-bold text-center my-5'>Our Menu</h2>
      <div className='grid grid-cols-4'>
        {
          menu.map((coffee) => (
            <div key={coffee.id} className='border-2 mx-5 border-black flex items-center justify-center flex-col h-[200px] my-5 rounded-xl'>
              <img className='w-[100px] rounded-xl' src={coffee.coffeeImgUrl} alt="" />
              <h2 className='font-semibold my-3'>{coffee.coffeeName}</h2>
              <p className='font-semibold'>Price: <span className='font-normal'>{coffee.coffeePrice}$</span></p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Menu