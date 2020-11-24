import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

//actions de redux
import { createTaskAction } from '../../../actions/taskAction';
import ErrorInput from '../ErrorInput';

const AddTasks = () => {

    const [nameTask, setSaveNameTask] = useState('');
    const [errorInput, setErrorInput] = useState(false);
    const dispatch = useDispatch();
    
    //acceder al state del store
    const loading = useSelector( state => state.tasks.loading );
    const error = useSelector( state => state.tasks.error );
    
    // llamo al action de las taskAction
    const addTask = task => dispatch( createTaskAction(task) );
    
    const submitNewTask = e =>{
        e.preventDefault();

        if(nameTask.trim() === ''){

            setErrorInput(true);
            return;
        }

        setSaveNameTask('');
        setErrorInput(false);

        addTask({
            nameTask
        })
    }

    return (
        <div className="flex-fill p-3">
            <div className="card-body">
                <h3>Add tasks</h3>
            </div>

            <form onSubmit={ submitNewTask }>
                <div className="form-group">
                    <label htmlFor="nameTask">Name task</label>
                    <input 
                        className="form-control form-control-lg mb-5" 
                        id="nameTask" 
                        type="text"
                        name="nameTask"
                        value={ nameTask }
                        onChange={ e => setSaveNameTask(e.target.value)}
                        placeholder="Enter your task"
                    />
                    <button type="submit" className="btn btn-dark btn-block text-uppercase font-weight-bold">add</button>
                </div>
            </form>

            { loading && 
                (<div className="alert alert-success" role="alert">
                    Loading ...
                </div>)
            }
            {
                error &&
                (<div className="alert alert-danger" role="alert">
                    Error detected
                </div>)
            }

            {
                errorInput &&
                (<ErrorInput mensaje="Escriba una tarea !"/>)
            }
        </div>
    )
}

export default AddTasks
