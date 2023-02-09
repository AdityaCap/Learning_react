import { Component } from "react";

export default class Employee extends Component{
    constructor(){
        super();
        this.state={
            employees:[]
        }
    }
    /*LifeCycle Hooks */
    componentDidMount(){
        let e1={
            id: 1,
            name: 'Harry Potter',
            salary: '85000',
            city: 'london'
            
        };
        let e2={
            id: 2,
            name: 'Ronald Weasley',
            salary: '75000',
            city: 'kent'
        };
        let e3={
            id: 3,
            name: 'hermione Granger',
            salary: '95000',
            city: 'london'
        };
        let temp=[e1,e2,e3];
        this.setState({
            employees:temp
        });
    }
    render(){
        return(
            <div>
                <h1>Employee List</h1>
                {
                    this.state.employees.map(e=>(
                        <div key={e.id}>
                            Id:{e.id}<br/>
                            Name:{e.name}<br/>
                            City:{e.city}<br/>
                            salary:{e.salary}<br/><br/>
                        </div>
                    ))
                }
                <br/>
                <br /><br />
                <button onClick={()=>(this.sortEmployee('ASC'))}>Sort as per the Salary - ASC</button>
                <button onClick={()=>(this.sortEmployee('DESC'))}>Sort as per the Salary - DESC</button>                
            </div>
        );
    }
    sortEmployee(direction){
        let temp=[];
        switch(direction){
            case 'ASC':
                temp = this.state.employees.sort((e1, e2) => e1.salary - e2.salary); 
                break;
            case 'DESC':
                temp = this.state.employees.sort((e1, e2) => e2.salary - e1.salary); 
                break;
            default:
                break;
                
            
        }

        this.setState({
            employees: temp
        });
    }
}