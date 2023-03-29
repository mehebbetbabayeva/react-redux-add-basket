import React from 'react'
import Badge from '@mui/material/Badge';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { connect } from 'react-redux'
const Header = (props) => {
  return (
    <header>
        <h1>LOGO</h1>
       
        <Badge badgeContent={props.count} color="primary">
            <LocalGroceryStoreOutlinedIcon/> 
            </Badge>
            
       
    </header>
  )
}
function mapStateProps(state){
  return{
      count:state.count
  }
}
export default connect (mapStateProps)(Header)