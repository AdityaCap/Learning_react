import axios from "axios";
import { Component } from "react";
export default class Todo extends Component{
    constructor(){
        super();
        this.state={
            todo:[],
        };

    }
    componentDidMount(){
        //Call the Api
        this.gettodo();

    }
    render(){
        return(
            <div>
                <h1>Todo List</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">UserId</th>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todo.map ((t) => (
                            
                                <tr key={t.id}>
                                    <th scope="row">{t.userId}</th>
                                    
                                    <td>{t.id}</td>
                                    <td>{t.title}</td>
                                    <td>{t.completed.toString()}</td>
                                    
                                </tr>
                            ))}
                    </tbody>
                    </table>
            </div>
        );
    }

    async gettodo(){
        try{
            const respone =axios.get('https://jsonplaceholder.typicode.com/todos');
            const data=(await respone).data;
            this.setState({
                todo:data,
            });
        }
        catch(error){
            console.error(error);
        }
    }
}