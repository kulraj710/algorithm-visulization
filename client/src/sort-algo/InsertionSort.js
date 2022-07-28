import {delay} from '../utils/delay';

async function InsertionSort(array, setCurrent, setResult){
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
export default InsertionSort;
