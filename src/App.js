import React, { Component } from 'react'
import WellcomeRedux from './Component/WellcomeRedux'
import { connect } from 'react-redux';
import { actChangeCourseName, actChangeUserName} from "./actions";

class App extends Component {
  handleChangeUserName=(e)=>{
    this.props.changeUserName(e.target.value);
  }
  handleChangeCourserName=(e)=>{
    this.props.changeCourseName(e.target.value)
  }
  render() {
    return (
      <>
        <div className="form-container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Change UserName
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handleChangeUserName}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Change CourseName
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="CourseName"
            aria-label="CourseName"
            aria-describedby="basic-addon1"
            onChange={this.handleChangeCourserName}
          />
        </div>
        {/* <div>
          <span>Xin chào,</span>
          <input className="btn btn-danger" type="submit" defaultValue="Redux-Demo" placeholder="Redux-Demo"></input>
        </div>
        <div>
          <p>Chào mừng bạn đến với khóa học, </p>
          <input className="btn btn-info" type="submit" defaultValue="Redux-Demo" placeholder="Redux-ReactJs"></input>
          <span>tại Devmaster Academy</span>
        </div> */}
      </div>
      <WellcomeRedux />
      </>
    )
  }
}
const mapDispathToProps=(dispatch)=>{
  return{
    changeUserName:(value)=>{
      dispatch(actChangeUserName(value));
    },
    changeCourseName:(value)=>{
      dispatch(actChangeCourseName(value));
    },
  }
}
export default connect(null,mapDispathToProps)(App);