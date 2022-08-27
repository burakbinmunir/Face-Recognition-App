import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import React,{Component} from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Signin from './Components/Signin/Signin';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import Register from './Register/Register';

const app = new Clarifai.App({
  apiKey: '212662fbf67f42dab11937d7085644c3'
});




class App extends Component {

  constructor(){
    super();
    this.state = {
      input:'',
      imageLink: '',
      box: {},
      route: 'signin'
    }
  }


  componentDidMount () {
    fetch("http://localhost:2000")
    .then(response => response.json())
    .then(console.log);
  }
  onInputSubmit =(event) =>{
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (response) => {
    const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = image.width;
    const height = image.height;
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onSubmitButton = () => {

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then
    (response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err=> console.log(err))
    
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    return (
        <div className="App">
          
          {
            this.state.route === 'home'
            ? 
            <div>   
              <Navigation onRouteChange={this.onRouteChange} />
              <Logo />
              <Rank/>
              <ImageLinkForm onInputSubmit={this.onInputSubmit} onSubmitButton={this.onSubmitButton}  />
              <FaceRecognition box={this.state.box} imgUrl={this.state.input}/>
            </div>
            :(
              this.state.route === 'signin' ?
              <div>
                <Logo />
                <Signin onRouteChange={this.onRouteChange}/>
              </div>
              :
              <div>
              <Logo />
              <Register onRouteChange={this.onRouteChange}/>
            </div>
            )
            
            
          }
        </div>
    );
  }
}

export default App;
