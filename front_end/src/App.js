import React from 'react';
import axios from 'axios'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data:{
        token: "-",
        message_response: "Pending",
        status: "pending",
      },
      decodedToken:{
        username: '', 
        iat: 0, 
        exp: 0,
      }
    }
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:3001/login')
    .then(response =>{
      this.setState({data:response.data})
    })
    .catch(response =>{
      this.setState({data: {...this.state.data, status:"error"} })
    })
  }

  sendToken(){
    axios.post('http://127.0.0.1:3001/login', { token : this.state.data.token})
    .then(response =>{
      this.setState({decodedToken:response.data})
    })
    .catch(response =>{
      this.setState({decodedToken:response.data})
    })
  }

  render = () => (
    this.state.data.status === "pending" ? 
      <div className="App">
        <header>
          Header
        </header>
        <article>
          {this.state.data.status}<br/>
        </article>
      </div> : 
      <div className="App">
        <header>
          Header
        </header>
        <article>
          STATUS : {this.state.data.status} <br/>
          TOKEN : {this.state.data.token} <br/>
          <button onClick={() => this.sendToken()}>Send token</button>
          <br/><br/>
          Decoded, klik Send token button <br/>
          username : {this.state.decodedToken.username} <br/>
          iat : {this.state.decodedToken.iat} <br/>
          exp : {this.state.decodedToken.exp} <br/>
        </article>
      </div>
  )
}
    

export default App;
