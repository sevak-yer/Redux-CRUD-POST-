import React from 'react';
import NewPost from './NewPost';
import ShowPost from './ShowPost';

const App = () => {
    return (
        <div className='container'>
            <NewPost />,
            <ShowPost />
        </div>
    )
}

export default App;