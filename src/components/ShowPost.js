import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions'

const ShowPost = (props) => {
    const [message, setMessage] = useState('');

    const titleShow = () => {
        if (props.state.posts.length !== 0) {
            return props.state.posts[props.state.posts.length - 1].title
        } else { return '' }
    }

    useEffect(() => {
        if (props.state.posts.length !== 0) {
            setMessage(props.state.posts[props.state.posts.length - 1].message)
        } else { setMessage('') }
    }, [props.state.posts])

    const postDelete = () => {
        if (props.state.posts.length !== 0) {
            props.deletePost(props.state.posts[props.state.posts.length - 1].title)
        }
    }

    const postEdit = () => {
        if (props.state.posts.length !== 0) {
            props.editPost(props.state.posts[props.state.posts.length - 1].title, message)
        }
    }

    return (
        <div className="border border-secondary rounded-3 border-1">
            <form className="mb-3">
                <h3 className="form-control" placeholder="Post Title">{titleShow()}</h3>
                <textarea
                    onChange={(e) => { setMessage(e.target.value) }}
                    className="form-control"
                    rows="6"
                    value={message}
                >
                </textarea>
            </form>
            <button onClick={postEdit} id='button1' type="button" className="btn btn-primary">Edit</button>
            <button onClick={postDelete} type="button" className="btn btn-danger">Delete</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps, { deletePost, editPost })(ShowPost);