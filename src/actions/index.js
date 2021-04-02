export const createPost = (title, message) => {
    return {
        type: 'CREATE-POST',
        payload: {
            title: title,
            message: message
        }
    }
}

export const editPost = (title, message) => {
    return {
        type: 'EDIT-POST',
        payload: {
            title: title,
            message: message
        }
    }
}

export const deletePost = (title) => {
    return {
        type: 'DELETE-POST',
        payload: title
    }
}