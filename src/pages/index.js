import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Thank you stopping by.</h1>
    <p>My name is Bill Younker.</p>
    <p>This is my website.</p>
    <p> // gives an error because the tag isn't closed.</p> 
    <Link to="/page-2/">Learn about me.</Link>
  </div>
)

export default IndexPage
