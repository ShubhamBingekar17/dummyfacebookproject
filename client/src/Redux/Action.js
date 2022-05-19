import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        console.log("fetching")

        const { data } = await api.fetchPosts();

        console.log(data)

        dispatch({ type: 'FETCH_ALL' , payload: data});

    } catch (error) {
        console.log("this: "+error.message);
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try {
      console.log("this 1st done");
        const  { data } = await api.createPost(post);
        console.log("this done");
        dispatch({ type: 'CREATE' , payload: data});
    } catch (error) {
      console.log("this"+error.message);
    }
}

export const likePost = (post) => async (dispatch) => {
    try {
        const { data } = await api.likePost(post);

        dispatch({ type: 'UPDATE' , payload: data});
    } catch (error) {
        console.log(error.message);
    }
}