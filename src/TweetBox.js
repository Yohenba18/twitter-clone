import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from './Firebase'

function TweetBox() {
  const [tweetMessage, setTweetMesssage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
      e.preventDefault();
      db.collection("posts").add({
          displayName: "Korou",
          username: 'koroubaloser',
          verfied:true,
          text: tweetMessage,
          image: tweetImage,
          avatar:"https://upload.wikimedia.org/wikipedia/en/c/c7/Wikipedia_profile_photo_%28Tronic2%29.jpg"
      });
      setTweetImage("");
      setTweetMesssage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/c/c7/Wikipedia_profile_photo_%28Tronic2%29.jpg" />
          <input
          onChange={(e) => setTweetMesssage(e.target.value)}
            value={tweetMessage}
            placeholder="whats happening?"
            type="text"
          />
        </div>
        <input
        onChange={(e) => setTweetImage(e.target.value)}
        value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image url."
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton ">Tweet</Button>
      </form> 
    </div>
  );
}

export default TweetBox;
