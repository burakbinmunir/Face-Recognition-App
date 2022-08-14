import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import React,{Component} from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      input:''
    }
  }

  onInputSubmit =(event) =>{
    console.log(event.target.value);
  }

  onSubmitButton (){
    console.log("Clicked!");
  }

  render(){
    return (
        <div className="App">
          <Navigation />
          <Logo />
          <Rank/>
          <ImageLinkForm onInputSubmit={this.onInputSubmit} onSubmitButton={this.onSubmitButton}  />
        </div>
    );
  }
}

export default App;
