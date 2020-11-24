import React from 'react';
import { useHistory } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { deleteTask, getTaskEdit, editTaskAction } from '../../actions/taskAction';

const CardTask = ({task}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const redireccionarEdicion = task => {
        dispatch( getTaskEdit(task) );
        history.push(`/tasks/edit/${task.id}`)
    }

    const eliminarTarea = id =>{
        dispatch(deleteTask(id));
    }
    
    return (
        <li className="list-group-item">
            {task.nameTask}
            <button 
                className="btn btn-danger btn-sm float-right"
                onClick={ () => eliminarTarea(task.id) }>
            Del</button>
            <button 
                className="btn btn-info mr-2 btn-sm float-right"
                onClick={ () => redireccionarEdicion(task) }>
            Edit</button>
        </li> 
    )
}

export default CardTask
