import React, { Component } from 'react';
import wishes from './data/birthdayGreetings';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null
    }
  }
  componentDidMount(){
    fetch('https://api.unsplash.com/search/photos?client_id=4cd31b0dbc08f32613154618f1a895da43a1d113e49e78943b260956fd1839e7&page=1&per_page=10&query=Birthday')
    .then(res => res.json())
    .then(data => this.setState({image: data.results[this.props.number].urls.small}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} alt="logo" />
          <h1 className="App-title">{wishes.Greetings[this.props.number].message}</h1>
        </header>
      </div>
    );
  }
}

export default App;
