import React, { Component } from 'react'
import axios from '../../../src/axios';
import Post from '../../components/Post/Post';
import './Posts.css';


export class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/posts')
      .then(res => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Anton'
          }
        })
        this.setState({
          posts: updatedPosts
        })
        //  console.log(res.data);

      })
      .catch(error => {
        console.log(error);

        // console.log("ERROR HERE: " + error);
        // this.setState({
        //   error: true
        // })
      })
  }



  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    })
  }
  render() {

    let posts = <p style={{ color: 'red' }}>Something went wrong...</p>
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        // console.log(post);

        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => {
            this.postSelectedHandler(post.id)
          }}
        />;
      })

    }


    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts
