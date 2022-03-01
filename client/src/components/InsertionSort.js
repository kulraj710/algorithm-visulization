import React from 'react'
import Chart from './Chart'
import Preferances from './Preferances'

const InsertionSort = () => {
    let array = []
    const [element, setElement] = React.useState(0)
    for (let i = 0; i < element; i++) {
        let k = Math.floor((Math.random() * 100) + 1)
        array.push(k)
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

    const [result, setResult] = React.useState(array);
    const [current, setCurrent] = React.useState(0);

    async function in_sort(){
        for(let i = 1; i < array.length; i++){
            let key = array[i];
            setCurrent(i)
            let j = i - 1;
            await delay(70)
            while(j >= 0 && array[j] > key){
                array[j + 1] = array[j];
                setCurrent(j + 1)
               await delay(70)
                j--;
            }
            array[j + 1] = key;
            setResult([...array]);
        }
    }

  return (
    <div>
        insertion_sort
        <Preferances setElement={setElement}/>
        <button onClick={in_sort}>Start your sort</button>
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

export default InsertionSort