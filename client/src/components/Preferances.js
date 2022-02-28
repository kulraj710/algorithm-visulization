import React from 'react'

const Preferances = ({setElement}) => {
    const handleChange = (e) => {
        setElement(e.target.value)
        console.log(e.target.value)
    }
  return (
      <div>
    <div>Preferances</div>
    <div>
        <form>
            <label> Total Number of elements : </label> <input type="number" onChange={handleChange} name="element"/>
            
            {/* <button onClick={in_sort}>Start your sort</button> */}

        </form>
    </div>
    </div>
  )
}

export default Preferances