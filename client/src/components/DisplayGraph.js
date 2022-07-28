import React from 'react'
import Chart from '../charts/Chart'
import Preferances from './Preferances'
import InsertionSort from '../sort-algo/InsertionSort'
import bubbleSort from '../sort-algo/bubbleSort'
import Navbar from '../layout/Navbar'
import ScrollIntoView from 'react-scroll-into-view'

const DisplayGraph = () => {
    let array = []
    const [element, setElement] = React.useState(0)
    for (let i = 0; i < element; i++) {
        let k = Math.floor((Math.random() * 100) + 1)
        array.push(k)
    }

 

    const [result, setResult] = React.useState(array);
    const [current, setCurrent] = React.useState(0);
    const [showChart, setShowChart] = React.useState(false);


    const runAlgoOnClick = () => {
        setShowChart(true)
        // InsertionSort(array, setCurrent, setResult)
        bubbleSort(array, setCurrent, setResult)
    }

    const buttonStyles = {
        padding : "5px 30px",
        fontWeight : 'bold',
        margin : "20px 0 0 0",
        borderRadius : "12px",
        backgroundColor : "#82CA9D",
        color : 'white',
        border : '1px solid lighgrey',
        cursor : "pointer",
    }
    const spanStyles = {
        color : '#8884D8',
        padding : "0 20px",
        fontWeight : 'bold',
        fontSize : '20px',
    }

  return (
    <div>
        <Navbar/>
        <div style={{marginBottom : '82px'}}></div>
        <Preferances setElement={setElement}>
            <ScrollIntoView selector="#chart">    
                    <button onClick={runAlgoOnClick} style={buttonStyles}>Start your sort</button>
            </ScrollIntoView>
        </Preferances>
        <div>
            <span style={spanStyles}> Randomly generated array :</span> [
                {result.map((item, index) => {        
                return( 
                <span key={index}>
                    {item}
                    {(index === result.length - 1) ? null : " , "} 
                </span>)
            })} 
            ]
            
        </div>
        <div id='chart'>
        {showChart ? <Chart result={result} current={current}/> : null}
        </div>
    </div>
  )
}

export default DisplayGraph