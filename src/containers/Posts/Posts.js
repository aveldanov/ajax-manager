import React, { Component } from 'react'
import axios from '../../../src/axios';

import Post from '../../components/Post/Post';
import './Posts.css';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    //console.log(this.props);
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

      })
  }






  postSelectedHandler = (id) => {
    // this.setState({
    //   selectedPostId: id
    // })


    this.props.history.push({ pathname: '/posts/' + id })




  }
  render() {
    let posts = <p style={{ color: 'red' }}>Something went wrong...</p>
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link
          //   to={'/posts/' + post.id}
          //   key={post.id}
          // >

          <Post
            exact
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => {
              this.postSelectedHandler(post.id)
            }}
          />
          // </Link>
        )
      })

    }


    return (
      <div>
        <section className="Posts" >

          {posts}
          {console.log(this.props.match.url)}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>

    )
  }
}

export default Posts
