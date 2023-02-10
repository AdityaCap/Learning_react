import { Component } from "react";

import { Link, Outlet } from "react-router-dom";

export default class NavBar extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    componentDidMount(){}
    render(){
        return(
            <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                         data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                         aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Employee">Employee</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Posts">Posts</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Signup">Signup</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link " to='/Todo'>Todo</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link " to='/User'>User</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>

            </div>
            <div className="containerFluid">
              <div className="row">
                  <div className="col-lg-12">
                    <Outlet />
                </div>
            </div>
        </div>
            </div>

            
            
        )
    }
}