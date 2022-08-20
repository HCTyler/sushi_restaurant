import React from 'react'
import FoodDisplay from '../components/FoodDisplay'

function Menu() {
  var pageStyle = {
    display: "flex",
    justifyContent: "center",
  }
  var menuStyle = {
    height: "70vh",
    width: "80vw",
    backgroundColor: "#ede5da",
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
  }

  return (
    <section style={pageStyle}>
      <div style={menuStyle}>
        <h1>Title Store design</h1>
        <div>
          <FoodDisplay />
        </div>
      </div>
    </section>
  )
}

export default Menu