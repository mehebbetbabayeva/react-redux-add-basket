import React from 'react'
import { connect } from 'react-redux'
const Counter = (props) => {
    
  return (
    
    <div>
        <button onClick={()=>{props.dispatch({type:"DECREMENT"})}}>-</button>
        
        <button onClick={()=>{props.dispatch({type:"INCREMENT"})}}>+</button>
    </div>
  )
}

function mapStateProps(state){
    return {
        count:state.count,
    }
}
export default connect (mapStateProps)(Counter)