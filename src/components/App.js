import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: "" };

  componentDidMount() {
    this.onTermSubmit("Toys");
  }
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <div className="container mt-4 text-center ">
          <div className="row">
            <div className="col-6 offset-3">
              <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
          </div>
          <div className="row">
            <div className="col-8 mt-5">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-4">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
