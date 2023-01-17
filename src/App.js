
import './App.css';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';
import { Component } from 'react';

class  App extends Component {
  constructor(props){
    super();
    this.state={
      listStudents:[{msv:'sv001',name:'N V A' ,age:20,gen:'Nam',date:'11/11/1111',born:'NA',address:'NA'},
      {msv:'sv002',name:'N V B' ,age:20,gen:'Nam',date:'11/11/1111',born:'NA',address:'NA'},
      {msv:'sv003',name:'N V C' ,age:20,gen:'Nam',date:'11/11/1111',born:'NA',address:'NA'}],
      toggle: false
    }
  }
  hideForm = ()=>{
    this.setState({
      // toggle: !this.state.toggle
      toggle:false
    })
  }

  showForm = ()=>{
    this.setState({
      // toggle: !this.state.toggle
      toggle:true
    })
  }
  findStudentByid = (id)=>{
    console.log(id);
  }
  sendDataFromForm = (std)=>{
    console.log("qqwdcdev----->",std);
    this.setState(
      {
      listStudents : [...this.state.listStudents,std]
      }
    )
  }
  render(){
     let form = this.state.toggle?<Form sendData = {this.sendDataFromForm} hideForm ={this.hideForm}/>:''
  return (
    <div className="App">
      <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">
      {/* START CONTROL */}
    <Control showForm = {this.showForm}
      
    />
      {/* END CONTROL */}
      {/* START LIST STUDENT */}
      <ListStudent students={this.state.listStudents} showForm={this.showForm} findStudentByid={this.findStudentByid}/>
      {/* END LIST STUDENT */}
    </div>
  </div>
  {/* START FORM SINH VIEN */}
    {form}
  {/* END FORM SINH VIÊN */}
</div>

    </div>
  );
}
}

export default App;
