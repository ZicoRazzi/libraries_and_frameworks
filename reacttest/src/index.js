import React from 'react'; 
import ReactDOM from 'react-dom'; 
import ContentComp from './ContentComp';

const App = () => {
  return <div className="container"> 

    <h3> Hallo React!</h3>
    <ContentComp 
      name='Zico Rasimogli'
      message='React componenten zijn de basis van een React app'/> 
    <ContentComp 
      name='Ziya Rasimogli'
      message='Allerliefste sultan-baby'/>
  </div>
}

ReactDOM.render( <App />, document.querySelector('#root')); 