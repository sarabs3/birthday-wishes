import React, { Component } from 'react';
import wishes from './data/birthdayGreetings';
import ImageContainer from './imageContainer';
import Toolbar from './toolBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      greeting: '',
      number: 0
    }
    this.getNewWish = this.getNewWish.bind(this);
    this.getNumber = this.getNumber.bind(this);
  }
  componentDidMount(){
    this.getNewWish();
  }
  getNumber() { return Math.floor(Math.random() * 10);}
  copyWish() {
    const text = document.getElementsByTagName('h1')[0];
    text.select();
    document.execCommand("copy");
  }
  getNewWish() {
    let number = this.getNumber();
    number == this.state.number ? ++number : number;
    fetch('https://api.unsplash.com/search/photos?client_id=4cd31b0dbc08f32613154618f1a895da43a1d113e49e78943b260956fd1839e7&page=1&per_page=10&query=Birthday')
    .then(res => res.json())
    .then(data => this.setState({
      number,
      image: data.results[number].urls.small,
      greeting: wishes.Greetings[number].message
    }))
  }
  render() {
    return (
      <div className="App">
        <Toolbar getNewWish={this.getNewWish} copyWish={this.copyWish} />
        <header className="App-header">
          <ImageContainer src={this.state.image} />
          <h1 className="App-title">{this.state.greeting}</h1>
          {/* <button className="getNew" onClick={this.getNewWish}>
          Get a new One!
        </button> */}
        </header>
      </div>
    );
  }
}

export default App;
