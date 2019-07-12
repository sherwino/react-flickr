import React, { useContext, useEffect } from "react";
import { RefreshRateContext } from "../../pages/refreshRateContext";
import {
  Img,
  Card,
  Details,
  ImgTitle,
  ImgAuthor,
  ImgStats,
  LinkContainer,
  CardLink,
  Stat,
  ImgLink
} from "./Body.styles";
import { isUserWhitespacable } from "@babel/types";

const Body = () => {
  const [state, setState] = useContext(RefreshRateContext);
  let { timers } = state;

  const clearTimers = () => {
    if (timers.length) {
      timers.forEach(timer => clearTimeout(timer));
    }
  };

  const refreshImage = () => {
    const randomPg = Math.floor(Math.random() * 42);
    const url = `https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=80fb31613cb1da8bb384ebe50e9d9bf5&user_id=66956608%40N06&page=${randomPg}&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(image => {
        const pics = image.photos.photo;
        const randomIdx = Math.floor(Math.random() * pics.length);
        const selectedImg = pics[randomIdx];
        const { farm, server, id, secret } = selectedImg;
        selectedImg.url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;

        const profileUrl = `https://www.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=80fb31613cb1da8bb384ebe50e9d9bf5&user_id=${selectedImg.owner}&format=json&nojsoncallback=1`;
        fetch(profileUrl)
          .then(res => res.json())
          .then((user) => {
            const { first_name, last_name } = user.profile;
            if(first_name || last_name) {
              selectedImg.user = `${first_name} ${last_name}`
            } else {
              selectedImg.user = null;
            }
          })
          .then(() => setState(state => ({ ...state, image: selectedImg })));
          clearTimers();
          
      });
  };

  const refreshTimer = rate => {    
    if (rate > 0) {
      const ms = rate * 1000;
      timers.push(setTimeout(refreshImage, ms));
    } else if (timers > 1) {
      console.log('too many timers');
      
      clearTimers();
    }
  };

  useEffect(() => {
    refreshTimer(state.rate);
  });

  return (
    <Card>
      <ImgLink target="_blank" href={state.image.url}>
        <Img src={state.image.url} />
      </ImgLink>
      <Details>
        <ImgStats>
          <Stat>January 15, 2017</Stat>
          <Stat>3,234,324 views</Stat>
          <Stat>3,324 faves</Stat>
          <Stat>324 comments</Stat>
        </ImgStats>
        <LinkContainer>
          <CardLink href="#">
            <ImgTitle>{state.image.title}</ImgTitle>
          </CardLink>
          <CardLink href="#">
            {state.image.user ? <ImgAuthor>
              <span>by</span> {state.image.user}
            </ImgAuthor> : null }
          </CardLink>
        </LinkContainer>
      </Details>
    </Card>
  );
};
export default Body;

// TODO: Get image stats
// TODO: Construct links for image, and author
// TODO: Slider style
// TODO: Move API logic to utils
// TODO: Manifest.json and serviceworkers.
