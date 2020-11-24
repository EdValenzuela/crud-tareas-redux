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
    TASK_EDIT_ERROR
 } from '../types';

const initialState = {
    tasks:[],
    error: null,
    loading: false,
    taskDeleted:null,
    taskEdit: null
}

function dataReducer(state = initialState, action){
    switch(action.type){
        case START_DOWNLOAD_TASK:
        case ADD_TASK:
            return{
                ...state,
                loading: action.payload
            }
        
        case ADD_TASK_SUCCESS:
            return{
                ...state,
                loading: false,
                tasks: [...state.tasks, action.payload]
            }
        
        case ADD_TASK_ERROR:
        case DOWNLOAD_TASK_ERROR:
        case TASK_DELETE_ERROR:
        case TASK_EDIT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_TASK_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                tasks: action.payload
            }
        case GET_TASK_DELETE:
            return{
                ...state,
                taskDeleted: action.payload
            }
        case TASK_DELETE_SUCCESS:
            return{
                ...state,
                tasks: state.tasks.filter( item => item.id !== state.taskDeleted ),
                taskDeleted:null
            }
        case GET_TASK_EDIT:
            return{
                ...state,
                taskEdit: action.payload
            }
        case TASK_EDIT_SUCCESS:
            return{
                ...state,
                taskEdit: null,
                tasks: state.tasks.map( task =>  
                    task.id === action.payload.id ? task = action.payload : task
                )
            }
        
        default:
            return state;
    }
}

export default dataReducer;