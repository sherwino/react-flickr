import React from 'react'
import { Img, Card, Details, ImgTitle, ImgAuthor, ImgStats, CardLink, Stat } from './Body.styles'

const Body = props => {

  return (
    <Card>
      <CardLink href="https://live.staticflickr.com/1960/45670544451_606245a7ce_k.jpg">
        <Img src="https://live.staticflickr.com/1960/45670544451_606245a7ce_k.jpg" />
      </CardLink>
      <Details>
        <CardLink href="#">
            <ImgTitle>Wintertime Happiness</ImgTitle>
        </CardLink>
        <span>by</span>
        <CardLink href="#">
          <ImgAuthor>Alicja Zmyylowska</ImgAuthor>
        </CardLink>
        {/* <ImgStats> */}
        <Stat>3,234,324 views</Stat>
        <Stat>3,324 faves</Stat>
        <Stat>324 comments</Stat>
        <Stat>January 15, 2017</Stat>
        {/* </ImgStats> */}
        {/* <ImgStats></ImgStats>
        <ImgStats></ImgStats>
      <ImgStats></ImgStats> */}
      </Details>
    </Card>
  )
}
export default Body
