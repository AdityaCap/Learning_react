//import logo from './logo.svg';
//import './App.css';
import { Component } from 'react';
import Arry from './components/Arry';
import Employee from './components/Employee'
import User from './components/User'
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';

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
      
      <User />*/}
      <Todo/>
    </div> 
    )       
  };
}
