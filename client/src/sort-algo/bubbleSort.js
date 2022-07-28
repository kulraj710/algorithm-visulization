import {delay} from '../utils/delay'

async function bubbleSort(arr, setCurrent, setResult){

    for(let i = 0; i < arr.length; i++){

        setCurrent(i)
        await delay(70)
        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){
        
            if(arr[j + 1] < arr[j]){
                
                await delay(70);
                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
            setResult([...arr])
        }
    }
}

export default bubbleSort;