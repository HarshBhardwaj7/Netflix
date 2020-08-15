import React from 'react';
import ReactDOM from 'react-dom';
//import Card from './Cards';
//import Sdata from './Sdata';
import './index.css';
import App from './App.jsx';



/*function ncard(val){
      return(<Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}/> 

      );

}*/


ReactDOM.render( <App/>
             ,
      document.getElementById('root')

);