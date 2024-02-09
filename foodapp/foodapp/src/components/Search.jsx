import React, { useEffect, useState } from 'react'
import styles from './search.module.css'

export default function Search({foodData, setFoodData}) {

  const URL = "https://api.spoonacular.com/recipes/complexSearch"
  const API_KEY = "f7568f49c24343c295b90c31c53997d1"

  const[query, setQuery] = useState("pasta")

  useEffect(()=>{
      async function fetchFood(){
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        const data = await res.json()
        console.log(data.results)
        setFoodData(data.results)
      }
      fetchFood()
  },[query])

  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        type="text"
        onChange={()=>{
          setQuery(e.target.value)
        }} 
        value={query}/>
    </div>
  )
}
