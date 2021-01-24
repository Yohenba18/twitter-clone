import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
          <div className="widgets_input">
            <SearchIcon className="widgets_searchIcon" />
            <input placeholder="Search Twitter" type="text" />
          </div>

          <div className="widgets_widgetContainer">
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"1352992267976499204"} />

            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kunalb11"
          options={{ height: 400 }}
          />
          <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
          </div>
        </div>

    )
}

export default Widgets
