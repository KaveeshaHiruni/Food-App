import { useState } from "react"
import Search from "./components/Search"
import FoodLists from "./components/FoodLists"
import Nav from "./components/Nav"
import './app.css'
import Container from "./components/Container"
import InnerContainer from "./components/InnerContainer"
import FoodDetails from "./components/FoodDetails"


function App() {

  const[foodData, setFoodData] = useState([])
  const[foodId, setFoodId] = useState("654959")

  return (
    <div>
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodLists foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>    
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>    
      </Container>
    </div>
  )
}

export default App
