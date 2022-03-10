import React, { Component } from "react";

class TotalLikes extends Component {
  render() {
    const totalLikes = Object.values(this.props.apiData).filter(
      (char) => char.liked === true
    ).length;

    return (
      <>
        {totalLikes > 0 ? (
          <p className="totalLikes">Total likes &nbsp;&nbsp; {totalLikes}</p>
        ) : null}
      </>
    );
  }
}

export default TotalLikes;
