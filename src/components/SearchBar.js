import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChagne = event => {
    this.setState({ term: event.target.value });
  };
  onFormSumbit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSumbit}>
        <div className="form-group">
          <label htmlFor="bar">Searching for</label>
          <input
            id="bar"
            className="form-control"
            type="text"
            value={this.state.term}
            onChange={this.onInputChagne}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
