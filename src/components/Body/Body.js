import React from 'react'
import { Img, Card } from './Body.styles'

const Body = props => {

  return (
    <Card>
      {/* <Img src="https://i.imgur.com/oN7i0Yu.jpg" /> */}
      <Img src="https://i.imgur.com/r82EYbw.png" />
      Hey {props.content}
    </Card>
  )
}
export default Body
