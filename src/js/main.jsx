import React from 'react'
import ReactDOM from 'react-dom/client'
import propTypes from 'prop-types';


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


// index.css'
import '../styles/index.css';

// components
//import Home from './components/Home';

function SimpleCouter(props){
  return ( <div className="bigCounter">
      <div className="calendar">
            <i className="fa-regular fa-clock"></i>
      </div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
  </div>);

SimpleCouter.propTypes = {
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number,
  };

}
let counter = 0;
setInterval(function(){ 
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  counter++;
//render your react
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCouter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
  </React.StrictMode>,
);
},1000) ;
