import React from 'react'
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  container: {

    height: "100vh",
    width: "100vw",
    // opacity: "0.6",
  },

  nav: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderBottom : "1px solid rgb(0 0 0 / 8%)",
    boxShadow : "rgb(0 0 0 / 8%) 0 0.3px",
    zIndex : "3",
    // borderRadius: 3,
    color: '#4895ef',
    height: 65,
    display: "flex",
    alignItems: "center",
    "& > h3" : {
      paddingLeft : "3%",
      margin : "0",
      fontSize : "24px",
    }
   },
   section1 : {
     width : "500px",
     backgroundColor : "#f8f9fa",
     margin : "1rem"
   },
   mainLink : {
     width : "100%",
     padding : "1rem 0  ",
     textAlign : "center",
   },
   linkButton : {
     padding : "0.7rem 2.5rem",
     color : "white",
     fontWeight : 500,
     letterSpacing : "0.4px",
     backgroundColor : "#005ce6",
     borderRadius : "12px",
   },
   supportingButton : {
      display : "flex",
      alignItems : "center",
     "& > button" : {
      padding : "0.7rem 2.5rem",
      width : "200px",
      fontWeight : 500,
      letterSpacing : "0.4px",
      borderRadius : "12px",
      border : "0.3px solid rgb(0 0 0 / 8%)",
       
     }
   },
});

const Selection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <nav className={classes.nav}><h3>Select Sorting Algorithm</h3></nav>
      <section className={classes.section1}>
        <h1>Find the most suitable sorting algorithm for your array.</h1>
        <p> Paste your array or generate random arrays and start your sort in any language.</p>
        <div className={classes.mainLink}><Link className={classes.linkButton} to="/insertion_sort">Start sorting!</Link></div>
        <div className={classes.supportingButton}><button>How is this helpful?</button></div>
      </section>
    </div>
  )
}

export default Selection