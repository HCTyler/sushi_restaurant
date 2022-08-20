import React from 'react'
import Background1 from '../assets/Background1.jpg'

function Home() {

    var sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: "url(" + { Background1 } + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };

  return (
      <div>
          <h1>Sushi Resturaunt</h1>
          <section style={sectionStyle}>
          </section>
      </div>
  )
}

export default Home