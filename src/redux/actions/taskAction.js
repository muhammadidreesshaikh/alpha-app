import axios from 'axios';

import {
    GET_USERS,
    ADD_TO_CART,
    REMOVE_ITEM,
    UPDATE_ITEM
} from "./actions";

export const GetUsers = () => {
    console.log("GetUsers");
    
    return dispatch => {
        console.log("GetUsers dispatch");

        axios.get(`https://reqres.in/api/users`)
        .then(res => {
            const persons = res.data;
            
            dispatch({
                type: GET_USERS,
                users: persons
            });
        })
    };
};

//add cart action
export const AddToCart= (item)=>{
    return{
        type: ADD_TO_CART,
        item
    }
}

//remove item action
export const RemoveItem=(item)=>{
    return{
        type: REMOVE_ITEM,
        item
    }
}

//updated item action
export const UpdateItem=(item)=>{
    return{
        type: UPDATE_ITEM,
        item
    }
}