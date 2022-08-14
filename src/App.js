import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import React,{Component} from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '212662fbf67f42dab11937d7085644c3'
});

class App extends Component {

  constructor(){
    super();
    this.state = {
      input:'',
      imageLink: ''
    }
  }

  onInputSubmit =(event) =>{
    this.setState({input: event.target.value});
  }

  onSubmitButton = () => {

    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
      function(response){
          console.log(response);
      },
      function(err){

      }
    );
  }

  render(){
    return (
        <div className="App">
          <Navigation />
          <Logo />
          <Rank/>
          <ImageLinkForm onInputSubmit={this.onInputSubmit} onSubmitButton={this.onSubmitButton}  />
          <FaceRecognition imgUrl={this.state.imageLink }/>
        </div>
    );
  }
}

export default App;
