import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTaskAction } from '../../../actions/taskAction';
import { useHistory } from 'react-router-dom';
import ErrorInput from '../ErrorInput';

const EditTask = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // nuevo state de producto
    const [ producto, guardarProducto] = useState({
        nameTask: '' 
    })
    const [errorInput, setErrorInput] = useState(false);

    //Tarea a editar
    const taskSaveDetected = useSelector(state => state.tasks.taskEdit);
 
    useEffect(() => {
        guardarProducto(taskSaveDetected);
    }, [taskSaveDetected]);
    
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    const { nameTask } = producto;

    const submitEditTask = e => {
        e.preventDefault();

        if(nameTask.trim() === ''){
            setErrorInput(true);
            return;
        }
        setErrorInput(false);
        dispatch( editTaskAction(producto) );
        
        history.push('/');
    }
    

    return (
        <>
            <div className="card w-100">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Edit Task
                    </h2>

                    <form
                        onSubmit={submitEditTask}
                    >
                        <div className="form-group">
                            <label>Name task</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name task"
                                name="nameTask"
                                value={ nameTask }
                                onChange={ onChangeFormulario }
                            />
                        </div>

                        <button 
                            type="submit"
                            className="btn btn-dark font-weight-bold text-uppercase d-block w-100"
                        >Save changes</button>
                    </form>
                </div>
                {
                    errorInput &&
                    (<ErrorInput mensaje="Debe renombrar su tarea !"/>)
                }
            </div>
        </>
    )
}

export default EditTask
