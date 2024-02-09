import React from 'react'
import FoodItem from './FoodItem'

export default function FoodLists({foodData,foodId, setFoodId}) {
  return (
    <div>
        {foodData.map((food)=>
            <FoodItem key={food.id} food={food} setFoodId={setFoodId}/>
        )}    
    </div>
  )
}
