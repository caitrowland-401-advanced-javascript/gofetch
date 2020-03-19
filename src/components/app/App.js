import React from 'react';
import './App.scss';
import DataList from '../results/results';
// import { NULL } from 'node-sass';


class App extends React.Component {

  constructor() {
    super()
    this.state = { 
      URL: '',
      results: ''
    }
  }

  handleChange = e => {
    this.setState({
      URL: e.target.value})
  }

  getData = async () => {

    const raw = await fetch(`${this.state.URL}`)
    const data = await raw.json()
    this.setState({
      results: data
    })
  }

  render () { 
    return ( 
      <div className ="Form">
      <form>
        <input onChange={this.handleChange} type="text" id='URL' placeholder='Input API URL here'/>
        <select> 
          <option selected value="get">GET</option>
          <option value="put">PUT</option>
          <option value="patch">PATCH</option>
          <option value="post">POST</option>
          <option value="delete">DELETE</option>
        </select>

        <button onClick={this.getData}>Get Results</button>

      <article className="results">
        {this.state.results.length
        ? <DataList content ={this.state.results} />
        : null
        }
      </article>
      </form>

      </div>

    )
  }


}


export default App;
