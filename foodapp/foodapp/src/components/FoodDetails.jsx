import React, { useEffect, useState } from 'react'
import styles from './fooddetails.module.css'

export default function FoodDetails({foodId}) {

  const[food,setFood] =useState({})
  const[isLoading, setIsLoading] = useState(true)

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = "f7568f49c24343c295b90c31c53997d1"

  useEffect(()=>{
    async function getFood(){
      const res = await fetch(`${URL}?apiKey=${API_KEY}`)
      const data = await res.json();
      console.log(data)
      setFood(data)
      setIsLoading(false)
    }
    getFood()
  },[foodId])
  //whenever the foodId chnges call useEffect()

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image}/>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🥕{food.vegetarian ? "vegetarian" : "non-vegetarian"}</strong>
          </span>
          <span>
            <strong> 👪 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>🐮{food.vegan ? " Vegan" : " Non-Vegan"}</strong>
          </span>
        </div>
        <div>
          <span> <strong>
            $ {food.pricePerServing/100} Per Serving </strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        {food && food.extendedIngredients && food.extendedIngredients.map((item) =>
          <div>
            <div className={styles.itemContainer}>
              <div className={styles.imageContainer}>
                <img className= {styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/` +item.image}/>
              </div>
              <div className={styles.nameContainer}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.amount}>{item.amount}</div>
              </div>
            </div>
          </div>
        )}
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step)=>
              (<li>{step.step}</li>)) 
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}
