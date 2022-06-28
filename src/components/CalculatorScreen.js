import React, { useState } from 'react'

const CalculatorScreen = () => {
    const [number,setNumber]=useState('');

    const [operator, setOperator] = useState('');
    const [result,setResult]=useState(null);
    const [secNumber, setSecNumber] = useState('');
    
const [display,setDisplay]=useState();

const operatorPress=(e)=>{
    e.preventDefault();
    console.log(e.target.name);
    setOperator(e.target.name);
    setDisplay('');

}

    const ButtonPress=(e)=>{
        console.log(e.target.name)
        if(!operator){
            setNumber(number+e.target.name)
            setDisplay(number+e.target.name)
            

        }
         

        if(operator){
            
            setSecNumber(secNumber+e.target.name)
            setDisplay(secNumber+e.target.name);
        }
    
        
        
        
    }


    

    const clear =()=>{
        setDisplay('');
        setNumber('');
        setOperator('');
        setSecNumber('');
        setResult('');
    }



const final =()=>{
  if(operator=="-") 
  { setResult(parseInt(number)-parseInt(secNumber).toString())
  }
  else{
    setResult(eval(secNumber+operator+number));
  }
}

  return (
   <>
   <div className='calculator-container'>
    <div className='screen'>
        <div className='number'>
        {result ? <p className='calc-number'>{result}</p>:<p className='calc-number'>{display}</p>}
        
        </div>
    </div>
    <div className='body'>
<div className="button">
    <button className='num' name="7" onClick={ButtonPress}>7</button>
    <button className='num' name="8" onClick={ButtonPress}>8</button>

    <button className='num' name="9" onClick={ButtonPress}>9</button>
    <button className='sign' name='+' onClick={operatorPress}>+</button>

    <button className='num' onClick={ButtonPress}> 6</button>
    <button className='num' onClick={ButtonPress}>5</button>
    <button className='num' onClick={ButtonPress}> 4</button>

    <button className='sign' name="-" onClick={operatorPress}>-</button>

    <button  className='num' onClick={ButtonPress}>3</button>
    <button className='num' onClick={ButtonPress}>2</button>
    <button className='num' onClick={ButtonPress}>1</button>
    <button className='sign' name="*" onClick={operatorPress}>*</button>

    <button className='num' onClick={ButtonPress}>0</button>
    <button className='sign' name="/" onClick={operatorPress}>/</button>
    <button className='eq' onClick={final}>=</button>




</div>
   </div>
   </div>
   <button onClick={clear}>clear</button>
   </>
  )
}

export default CalculatorScreen