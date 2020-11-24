import { 
    ADD_TASK, 
    ADD_TASK_SUCCESS, 
    ADD_TASK_ERROR,
    START_DOWNLOAD_TASK,
    DOWNLOAD_TASK_SUCCESS,
    DOWNLOAD_TASK_ERROR,
    GET_TASK_DELETE,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_ERROR,
    GET_TASK_EDIT,
    TASK_EDIT_SUCCESS,
    TASK_EDIT_ERROR,
    START_EDIT_TASK
 } from '../types';

import clienteAxios from '../config/axios';

//crear nuevas tareas
export function createTaskAction(task){
    return async(dispatch) => {
        dispatch( addTask() );

        try {
            //Insertar en la api
            await clienteAxios.post('/tasks', task);

            //actualizar el state
            dispatch( addTaskSuccess(task) )
        } catch (error) {
            console.log(error);
            dispatch( addTaskError(true) );
        }
    }
}

const addTask = () =>({
    type: ADD_TASK,
    payload: true
})

const addTaskSuccess = task =>({
    type: ADD_TASK_SUCCESS,
    payload: task
})

const addTaskError = estado =>({
    type: ADD_TASK_ERROR,
    payload: estado
})

export function getTaskAction(){
    return async (dispatch) =>{
        dispatch(downloadTask());

        try {
            const resp = await clienteAxios.get('/tasks');
            const {data} = resp;
            dispatch(downloadTaskSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch( downloadTaskError() );
        }
    }
}

const downloadTask = () => ({
    type: START_DOWNLOAD_TASK,
    payload: true
})

const downloadTaskSuccess = tasks =>({
    type: DOWNLOAD_TASK_SUCCESS,
    payload: tasks
})

const downloadTaskError = () => ({
    type: DOWNLOAD_TASK_ERROR,
    payload: true,
})

//SELECCIONA Y ELIMINA LA TAREA
export function deleteTask (id){
    return async (dispatch) =>{
        dispatch(getTaskDelete(id) );

        try {
            await clienteAxios.delete(`/tasks/${id}`);
            dispatch( deleteTaskSuccess() );
        } catch (error) {
            console.log(error);
            dispatch( deleteTaskError() );
        }
    }
}

const getTaskDelete = id =>({
    type: GET_TASK_DELETE,
    payload: id
})

const deleteTaskSuccess = () => ({
    type: TASK_DELETE_SUCCESS
})

const deleteTaskError = () => ({
    type: TASK_DELETE_ERROR,
    payload: true
})

//TAREA EN EDICION
export function getTaskEdit(task){
    return(dispatch) =>{
        dispatch( getTaskActionEdit(task) )
    }
}

const getTaskActionEdit = task => ({
    type: GET_TASK_EDIT,
    payload: task
    
})

//EDITA UN REGISTRO EN LA API Y STATE
export function editTaskAction(task){
    return async(dispatch) =>{
        dispatch( editTask(task) );

        try {
            await clienteAxios.put(`/tasks/${task.id}`, task);
            dispatch(editTaskSuccess(task));
        } catch (error) {
            console.log(error);
            dispatch(editTaskError());
        }
    }
}

const editTask = () => ({
    type: START_EDIT_TASK
})

const editTaskSuccess = task => ({
    type: TASK_EDIT_SUCCESS,
    payload: task
})

const editTaskError = () => ({
    type: TASK_EDIT_ERROR,
    payload: true
})