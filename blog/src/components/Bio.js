
import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './avatar-2-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
        
      >
        <img
          src={profilePic}
          alt={`Kasia and Bart`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Kasia Balcerzak</strong> and <strong> Bart Szulc</strong> who live in Gdansk and works at Spartez / Atlassian making cool stuff.{' '}
          <div>
          <div id="bartTwitter"><a href="https://twitter.com/BartSzulc">
            @BartSzulc
          </a></div> 
          <div id="kasiaTitter"><a href="https://twitter.com/kasia_balcerzak">
            @kasia_balcerzak
          </a></div>
          </div>
          </p>
      </div>
    )
  }
}

export default Bio