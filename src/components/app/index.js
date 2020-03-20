import React from 'react'
import './App.scss';
import Results from '../Results';
import Header from '../Header'

class App extends React.Component {  

  constructor () {
    super()
    this.state = {
      url: null,
      results: []
    }
  }

  handleSubmit = async (e) => {
    await this.setState({
      url: e.target.value
    })
    e.preventDefault()
  }

  getData = async () => {
    const raw = await fetch(this.state.url)
    const data = await raw.json()
    this.setState({
      results: data.results
    })
  }

    render() {
      return (
        <div className='App'>

          <Header />
          <form>
            <input onChange={this.handleSubmit} value = {this.state.value} type="text" placeholder='Input API URL here'/>
          </form>
          <button onClick={this.getData}> Get Results</button>
          <Results content={this.state.results} />
        </div>
      )
    }
}


export default App;
