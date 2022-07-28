import React from 'react'
import Chart from '../charts/Chart'
import Preferances from './Preferances'
import InsertionSort from '../sort-algo/InsertionSort'
import bubbleSort from '../sort-algo/bubbleSort'
import Navbar from '../layout/Navbar'

const DisplayGraph = () => {
    let array = []
    const [element, setElement] = React.useState(0)
    for (let i = 0; i < element; i++) {
        let k = Math.floor((Math.random() * 100) + 1)
        array.push(k)
    }

 

    const [result, setResult] = React.useState(array);
    const [current, setCurrent] = React.useState(0);

    const runAlgoOnClick = () => {
        
        // InsertionSort(array, setCurrent, setResult)
        bubbleSort(array, setCurrent, setResult)
    }

  return (
    <div>
        <Navbar/>
        <div style={{marginBottom : '82px'}}></div>
        <Preferances setElement={setElement}/>
        <button onClick={runAlgoOnClick}>Start your sort</button>
        <div>
            Randomly generated array : [
                {result.map((item, index) => {        
                return( 
                <span key={index}>
                    {item}
                    {(index === result.length - 1) ? null : " , "} 
                </span>)
            })} 
            ]
            
        </div>
        Chart is below
        <Chart result={result} current={current}/>
    </div>
  )
}

export default DisplayGraph