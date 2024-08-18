import React, { Component } from 'react'
import {connect} from "react-redux";

class WellcomeRedux extends Component {
    
  render() {
    return (
      <div>
        <h2>
            Xin chào,<span className='btn btn-danger'>{this.props.userName}</span>
        </h2>
        <h2>
            Chào mừng bạn đến với khóa học,<br/>
            <span className='btn btn-success'>{this.props.courseName}</span>tại 
            Devmaster
        </h2>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
    return{
        userName: state.userName,
        courseName:state.courseName,
    }
};
export default connect(mapStateToProps,null)(WellcomeRedux);
