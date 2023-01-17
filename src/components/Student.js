import React, { Component } from 'react'

export default class Student extends Component {
  editStudent = (id)=>{
    this.props.findStudentByid(id)
    this.props.showForm();
  }
  render() { 
  
    return (
    
      <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.msv}</td>
                <td>{this.props.namesv}</td>
                <td>{this.props.age}</td>
                <td>{this.props.gen}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                      onClick={()=>{this.editStudent(this.props.msv)}}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
              
    )
  }
}
