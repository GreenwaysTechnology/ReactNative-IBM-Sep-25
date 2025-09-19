import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { produce } from 'immer'

class Post extends React.Component {

    state = {
        posts: [], //handle acutal posts data
        isLoading: false, //handle slow calls -show spinner
        error: null
    }

    async fetchPosts() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url, { method: 'GET' })
            const posts = await response.json()
            console.log(posts)
            this.setState(produce(this.state, draft => {
                //initalize the posts
                draft.posts = posts
                draft.isLoading = true
            }))
        }
        catch (err) {
            this.setState(produce(this.state, draft => {
                //initalize the posts
                draft.error = err
                draft.isLoading = true
            }))
        }
    }
    componentDidMount() {
        //api logic
        this.fetchPosts()
    }


    render() {
        const { posts, isLoading, error } = this.state
        if (error) {
            return <div><h1>Something went Wrong {error.message}</h1></div>
        } else if (!isLoading) {
            return <h1>Posts Loading...</h1>
        } else {
            return <div>
                {posts.map(post => {
                    return <section key={post.id}>
                        <h1>{post.id}</h1>
                        <h2>{post.title}</h2>
                        <h2>{post.body}</h2>
                    </section>
                })}
            </div>
        }
    }
}




const App = () => {
    return <>
        <Post />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
