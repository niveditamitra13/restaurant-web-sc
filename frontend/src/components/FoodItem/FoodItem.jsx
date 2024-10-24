import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const FoodItem = ( {id,name,price,description,image}) => {
    const[itemCount, setItemCount]=useState(0)
  return (
    <div className='w-full m-auto border-r-4 shadow-[0px_0px_10px_#00000015  ]'>
       
       <div className="relative">
        <img  className='w-full rounded-t-lg' src={image} alt="" />
        {!itemCount
        ? <img className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={()=>setItemCount(prev=>prev+1)} src= {assets.add_icon_white} alt=""/>
        : <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-3xl bg-white">
            <img className='w-8' onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
            <p>{itemCount}</p>
            <img className='w-8' onClick={()=>setItemCount (prev=>prev+1)} src={assets.add_icon_green} alt="" />
        </div>  
    }
       </div>

       <div className="p-7">

        <div className="flex justify-between items-center mb-2">
            <p className='text-xl font-medium'>{name}</p>
            <img  className='w-3/4' src={assets.rating_starts}alt="" />
        </div>
        <p className="text-[#676767] text-xs">{description}</p>
        <p className="text-xl font-medium text-red-600">{price}</p>
        
       </div>
    </div>
  )
}

export default FoodItem
