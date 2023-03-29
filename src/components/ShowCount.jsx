import React from 'react'
import { connect } from 'react-redux'
const ShowCount = (props) => {
  return (
    <div>
       {props.count}
    </div>
  )
}
function mapStateProps(state){
    return {count:state.count}
}

export default connect (mapStateProps)(ShowCount)