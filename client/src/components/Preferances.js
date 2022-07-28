import React from 'react'

const Preferances = ({ children, setElement}) => {
    const handleChange = (e) => {
        setElement(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div>
      <div style={{ padding : "1em", color : "grey"}}>
    <div style={{fontSize : "20px", fontFamily : "Roboto", fontWeight : "500"}}>Preferances : </div>
    <div style={{padding : '20px',minWidth : "400px", width : '33%', textAlign : "center",  border : '1px solid lightgrey'}}>
        <form>
            <label  style={{ fontSize : '14px', padding : "30px 20px"}}> Select Number of elements : </label> <input style={{ width : "55px", textAlign : "center" }} type="number" placeholder='num' onChange={handleChange} name="element"/>
            <br />
            <br />
            <label  style={{ fontSize : '14px', padding : "25px 20px"}}> speed : </label> <span style={{marginLeft : '120px'}}>Medium</span>
            
        </form>

          {children}
    </div>
    </div>
    </div>
  )
}

export default Preferances