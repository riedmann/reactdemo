import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      images: [],
    };
  }

  loadImage = () =>  {
      console.log("Before");
      let data = fetch("https://randomuser.me/api");
      console.log("After");
      
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetch done");
        let imgs = this.state.images;
        imgs.push(data.results[0].picture.large);
        this.setState({
          isLoaded: true,
          images: imgs,
        });
      });
    console.log("After fetch");
  };

  getImages = () => {
    let output = [];


    this.state.images.forEach((image) => {
      output.push(
        <div>
          <img src={image} />
        </div>
      );
    });
    return output;
  };
  render() {
    return (
      <div>
        <h2>Bilder</h2>
        <button onClick={this.loadImage}>Load Image</button>
        <div>{this.getImages()}</div>
      </div>
    );
  }
}

export default Content;
