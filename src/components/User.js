import { Component } from "react";

export default class User extends Component{
    constructor(){
        super();
        this.state={
             users:[],
        };       
    }
    /*LifeCycle Hooks */
    componentDidMount(){
        this.getUserData();
    }
    
    render(){
        return(
            <div>
                <h1>Users Details</h1>
                {
                    this.state.users.map(u=>(
                        <div key={u.id}>
                            ID:{u.id}<br/>
                            Name:{u.name}<br/>
                            Email:{u.email}<br/>
                            Username:{u.username}<br/><br/>
                        </div>
                    ))
                }
            </div>

        )
    }
    getUserData()
     {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data =>{
            this.setState({
                users:data,
            });
        })
    }
}
