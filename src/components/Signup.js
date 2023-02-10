import { Component } from "react";

export default class Signup extends Component{
    constructor(){
        super();
        this.state={
            user:{
                name:'',
                email:'',
                password: ''
            }
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <h2>Signup Form </h2>
                    <label>Enter your name</label>
                    <input type='text'
                        name='name'
                        value={this.state.user.name}
                        onChange={this.changeHandler}
                    />
                    <br/><br/>
                    <label>Enter your email</label>
                    <input type='text'
                        name='email'
                        value={this.state.user.email}
                        onChange={this.changeHandler}
                    />
                    <br/><br/>
                    <label>Enter your password</label>
                    <input type='password'
                            name='password'
                            value={this.state.user.password}
                            onChange={this.changeHandler}
                    />
                    <br/><br/>      
                    <button onClick={this.onSignup}>Sign Up</button>       
                                
                               
            </div>
        );
    }
    changeHandler=(event)=>{
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]:event.target.value
            }
        });
    }
    onSignup=()=>{
        console.log(this.state.user)
    }
}