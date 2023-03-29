import React, { useEffect, useState } from 'react'
import  axios  from 'axios'
import { connect } from 'react-redux'
const Products = (props) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios("https://fakestoreapi.com/products").then((res)=>{setData(res.data.slice(0,8))})
    },[])
    function handleClick(){
        props.dispatch({type:"ADD_TO_CARD"})
    }
  return (
    
    <div className='product'>
        {
            data.map(item=>(
                <div key={item.id}  className="card">
                    <img src={item.image} alt="" />
                    <h1>{item.title.slice(0,10)}</h1>
                    <p>{item.description.slice(0,20)}</p>
                    <button onClick={handleClick}>add me</button>
                </div>
            )

            )
        }
    </div>
  )
}
function mapStateProps(state){
    return{
        count:state.count
    }
}
export default connect (mapStateProps)(Products)