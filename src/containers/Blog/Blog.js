import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';


import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
// import FullPost from '../FullPost/FullPost';

class Blog extends Component {

  state = {
    auth: true
  }



  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                exact
                to="/posts/"
                activeClassName="my-active"
                activeStyle={{ color: "red" }}
              >Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submmit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>

            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}

          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}

          {/* <Route path="/" component={Posts} /> */}


          {/* <Route path="/posts/:id" exact component={FullPost} /> */}
        </Switch>



      </div>
    );
  }
}

export default Blog;