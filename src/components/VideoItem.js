import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="mt-2 card">
      <img className="card-img-top" src={video.snippet.thumbnails.medium.url} />
      <div className="card-body">
        <p className="card-text"> {video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
