import React from "react";

export default ({ video }) => {
  if (!video) {
    return <div>Loading ... </div>;
  } else {
    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
          />
        </div>
        <div className="mt-4 border">
          <h4> {video.snippet.title}</h4>
          {video.snippet.description}
        </div>
      </div>
    );
  }
};
