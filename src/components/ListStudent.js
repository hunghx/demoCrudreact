import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
  
  render() {
    console.log(this.props.students);
    let {students}= this.props.students;
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.students.map((std,index)=><Student key={std.msv} stt={index+1} msv={std.msv} namesv = {std.name} age={std.age} gen = {std.gen} findStudentByid={this.props.findStudentByid} showForm={this.props.showForm}/>)
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
