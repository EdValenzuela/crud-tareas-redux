import React, { useEffect } from "react";
import CardTask from './cardTask';
import AddTasks from './addTasks';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getTaskAction } from '../../actions/taskAction';

const Task = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const loadTask = ()=> dispatch( getTaskAction() );
        loadTask();
    }, []);

    //obtener el state
    const tasks = useSelector( state => state.tasks.tasks );
    const error = useSelector(state => state.tasks.error);
    const load = useSelector( state => state.tasks.loading);

  return (
    <>
        <div className="flex-fill">
            <h3 className="text-center my-5">Lista de tareas</h3>
            
            { error && (<p className="font-weight-bold alert alert-danger text-center my-3">Error detected</p>)}

            { load && (<p className="font-weight-bold alert alert-success text-center my-3">Loading ...</p>)}

            <ul className="list-group">
            {tasks.length === 0 ? ( 
                <li className="list-group-item">Sin Tareas</li>)
            : ( 
                tasks.map(task => (
                    <CardTask key={task.id} task={task}/>
                )) 
            )} 
            </ul>
        </div>
        <AddTasks />
    </>
  );
};

export default Task;
