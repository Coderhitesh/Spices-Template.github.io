import React from 'react'
import './about.css'

function About() {
  return (
    <section className="about-us">
    <div className="about">
      <img src="https://i.ibb.co/42Yr4zb/photo-1567554747701-66e30bac4cf3.jpg" className="pic"/>
      <div className="text">
        <h2>About Us</h2>
        <h5>Company <span>name <i class="ri-vuejs-fill"></i> </span></h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis, ut facilis vero eaque incidunt cumque impedit voluptate animi quam sint ducimus ipsam in molestiae illum odio blanditiis reprehenderit, exercitationem nisi, soluta porro. Perspiciatis ducimus ipsum ut maxime nulla officia dolorum cumque, laborum quae blanditiis eum itaque doloribus adipisci accusamus!</p>
        <div className="data">
        <a href="#" className="hire">Read More</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
