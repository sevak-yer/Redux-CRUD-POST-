import { combineReducers } from 'redux';

const postReducer = (oldposts = [], action) => {
    if (action.type === 'CREATE-POST') {
        return [...oldposts, action.payload];
    } else if (action.type === 'EDIT-POST') {
        const index = oldposts.findIndex((post) => {
            return post.title === action.payload.title
        })
        let posts = [...oldposts];
        posts[index].message = action.payload.message;
        return posts;
    } else if (action.type === 'DELETE-POST') {
        return oldposts.filter((post) => {
            return post.title !== action.payload
        })
    }
    return oldposts;
};

export default combineReducers({
    posts: postReducer
});