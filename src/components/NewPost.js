import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

const NewPost = (props) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const onSumbit = () => {
        props.createPost(title, message)
        setTitle('')
        setMessage('')
    }

    return (
        <form className="post-container">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Post</label>
                <input onChange={(e) => { setTitle(e.target.value) }} value={title} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Post Title" />
            </div>
            <div className="mb-3">
                <textarea onChange={(e) => { setMessage(e.target.value) }} value={message} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post Message"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={onSumbit}>Post</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps, { createPost })(NewPost);