import axios from "axios";
import { Component } from "react";

export default class Signup extends Component{
    constructor(){
        super();
        this.state={
            user:{
                name:'',
                email:'',
                password: ''
            },
            errors:{},
            msg: ''
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <h2>Signup Form </h2>
                <span>{this.state.msg}</span> <br />
                    <label>Enter your name</label>
                    <input type='text'
                        name='name'
                        value={this.state.user.name}
                        onChange={this.changeHandler}
                        
                    />
                    <span style={{color:'red'}}>{this.state.errors['name']}</span>
                    <br/><br/>
                    <label>Enter your email</label>
                    <input type='text'
                        name='email'
                        value={this.state.user.email}
                        onChange={this.changeHandler}
                    />
                    <span style={{color:'purple'}}>{this.state.errors['email']}</span>
                    <br/><br/>
                    <label>Enter your password</label>
                    <input type='password'
                            name='password'
                            value={this.state.user.password}
                            onChange={this.changeHandler}
                    />
                    <span style={{color:'pink'}}>{this.state.errors['password']}</span>
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
        
        //Validate User input
        if(this.handleValidation()){
            console.log(this.state.user);
            this.postUser(this.state.user);
        }
        else{
            //Display errors
            console.log('Validation not passed')
        }

    }
    handleValidation(){
        let name=this.state.user.name;
        let email=this.state.user.email;
        let password=this.state.user.password;
        let formValid=true;
        let tempErrors={}
        if(!name){
            formValid=false;
            tempErrors['name']='Name cant be empty';
        }
        if(!email){
            formValid=false;
            tempErrors['email']='Email cant be empty';
        }
        if(!password){
            formValid=false;
            tempErrors['password']='Password wont be empty you Jackass';
        }
        this.setState({
            errors:tempErrors
        });
        return formValid;

    }
    async postUser(person){
        try {
            const response = axios.post("http://localhost:1773/person/add", person);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
          } catch (error) {
            console.error(error.response.data.msg);
            this.setState({
                msg: error.response.data.msg
            })
          }
    }
    
    
}
