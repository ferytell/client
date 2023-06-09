import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actiontypes";
import * as api from "../api";

// Action Creator, action to maek something

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
    
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
    
    
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
        
    }
}

export const deletePost = (id) => async (dispatch) => {

    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error)        
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
        
    }
}