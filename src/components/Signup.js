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
            errors:{}
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
                    <span style={{color:'red'}}>{this.state.errors['name']}</span>
                    <br/><br/>
                    <label>Enter your email</label>
                    <input type='text'
                        name='email'
                        value={this.state.user.email}
                        onChange={this.changeHandler}
                    />
                    <span style={{color:'red'}}>{this.state.errors['email']}</span>
                    <br/><br/>
                    <label>Enter your password</label>
                    <input type='password'
                            name='password'
                            value={this.state.user.password}
                            onChange={this.changeHandler}
                    />
                    <span style={{color:'red'}}>{this.state.errors['password']}</span>
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
}