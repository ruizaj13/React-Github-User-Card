import React from 'react';
import fetchUser from './services/fetchUser'
import fetchFollowers from './services/fetchFollowers'
import './App.css';

class App extends React.Component {

    state = {
      gitUser:[],
      userFollowers:[]
    }

    componentDidMount(){
      fetchUser()
        .then( res => {
          this.setState({
            gitUser: res.data
          });
      });
      
      fetchFollowers()
        .then( res => {
          this.setState({
            userFollowers: res.data
          })
      })
    }
      
  render() {

    return(
      <div>
        <h1>Git User</h1>
        <div>
          <img width='200' src={this.state.gitUser.avatar_url} alt=''/>
          <h2>{this.state.gitUser.name}</h2>
        </div>
        
      </div>
      
    )

  }



}

export default App;
