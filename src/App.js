//import logo from './logo.svg';
//import './App.css';
import { Component } from 'react';
import Arry from './components/Arry';
import Employee from './components/Employee'
import User from './components/User'
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import { Outlet, Route, Routes } from "react-router-dom";
import PageNotFound from './PageNotFound';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React From Imtiyaz Sir OP
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
export default class App extends Component{
  render(){
    return (
      <div>
      {/* <Arry />
      <hr/>
      <hr/>
      <Employee/> 
      
      <Posts />
      
      <User />
      <Todo/>
      <Signup />*/}
      <NavBar />
      <Routes>
        <Route path='/' element={<Arry/>} />
        <Route path ='/Employee' element={<Employee/>}/>
        <Route path ='/Posts' element={<Posts/>}/>
        <Route path ='/Signup' element={<Signup/>}/>
        <Route path ='/User' element={<User/>}/>
        <Route path ='/Todo' element={<Todo/>}/>
        <Route path ='*' element={<PageNotFound/>}/>
        
      </Routes>
    </div> 
    )       
  };
}
