import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { produce } from 'immer'

const Post = props => {
    //inital data with some sample posts
    const [posts, setPosts] = useState([
        {
            id: 1, title: 'Post-1', body: 'this is First Post'
        },
        {
            id: 2, title: 'Post-2', body: 'this is Second Post'
        }
    ])
    //isEdit
    const [isEditing, setIsEditing] = useState(false)

    //form fields state
    const [form, setForm] = useState({ title: '', body: '', id: null })

    //handleForm Submission
    const handleSubmit = (e) => {
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }

    const updatePost = () => {
        setPosts(posts.map(post => post.id === form.id ? form : post))
        clearFormFields()
        setIsEditing(false)
    }
    const clearFormFields = () => {
        setForm({ title: '', body: '', id: null })
    }
    const addPost = () => {
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        setPosts([...posts, newPost])
        //reset form
        clearFormFields()
    }

    const handleEdit = post => {
        setForm({ title: post.title, body: post.body, id: post.id })
        setIsEditing(true)
    }
    const handleDelete = id => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return <div>
        {/* Form to add new Post and also you can edit existing post */}
        {/* Todo: remove this json once the testing over */}
        {/* {JSON.stringify(form)} */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={evt => {
                        setForm({ ...form, title: evt.target.value })
                    }}
                    value={form.title}
                    required />
            </div>
            <div>
                <label htmlFor="body">Body:</label>
                <textarea
                    name="body"
                    value={form.body}
                    onChange={evt => {
                        setForm({ ...form, body: evt.target.value })
                    }}
                    placeholder="Body"
                    required />
            </div>
            <div>
                <button type="submit">{isEditing ? "Update" : "Add"} Post</button>
            </div>
        </form>
        {/* Render post */}
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => {
                        handleEdit(post)
                    }}>Edit</button>
                    <button onClick={() => {
                        handleDelete(post.id)
                    }}>Delete</button>
                </li>
            })}
        </ul>
    </div>
}


const App = () => {
    return <Post />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
