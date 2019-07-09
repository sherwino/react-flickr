import React from 'react'
import { Img, Card, Details, ImgTitle, ImgAuthor, ImgStats, CardLink, Stat, ImgLink } from './Body.styles'

const Body = props => {

  return (
    <Card>
      <ImgLink target="_blank" href="https://live.staticflickr.com/1960/45670544451_606245a7ce_k.jpg">
        <Img src="https://live.staticflickr.com/1960/45670544451_606245a7ce_k.jpg" />
      </ImgLink>
      <Details>
        <ImgStats>
          <Stat>January 15, 2017</Stat>
          <Stat>3,234,324 views</Stat>
          <Stat>3,324 faves</Stat>
          <Stat>324 comments</Stat>
        </ImgStats>
        <div>
          <CardLink href="#">
              <ImgTitle>Wintertime Happiness</ImgTitle>
          </CardLink>
          <CardLink href="#">
              <span>by</span>
              <ImgAuthor>Alicja Zmyylowska</ImgAuthor>
          </CardLink>
        </div>
        {/* <ImgStats></ImgStats>
        <ImgStats></ImgStats>
      <ImgStats></ImgStats> */}
      </Details>
    </Card>
  )
}
export default Body
