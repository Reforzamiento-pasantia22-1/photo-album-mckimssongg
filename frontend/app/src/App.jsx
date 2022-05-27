import React from "react"
import fetchData from "./services/Api"

function App() {
  const fetchApi = fetchData.getInstance();
  return (
    <React.Fragment>
      <h1></h1>
    </React.Fragment>
  )
}

export default App
