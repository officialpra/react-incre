import './Box.css'
import Incre from './Incre';
 import Decre from './Decre';
 import  Update from './Update';
import { useState } from 'react';

 
  
function Box(){
    const[v1,changedata]=useState(0);
    
    function add(){
        // console.log('hm')
    //    const[v1,changedata]=useState(0);
           changedata(v1+1);

        

    }
    function minus(){
        changedata(v1-1);

    }
 
    // let sum=1;
    return(
      
        <div className="box">
            
            <button onClick={add}>+</button>
            <button>{v1}</button>

            <button onClick={minus}>-</button>
            
           

        </div>

    );
}
export default Box;