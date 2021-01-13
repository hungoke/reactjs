import React from 'react'
import './scss/index.scss'
import MusicList from './components/MusicList'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }

  render() {
    return (
      <>
        <h1>Lớp học reactjs</h1>
        <h2>count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment 1</button>
        <div className="page test">hưng</div>
{/*
        <button onClick={() => this.increment(1)}>Increment 1</button>
        <button onClick={() => this.increment(2)}>Increment 2</button> */}

        <MusicList />
        <hr />
        <MusicList />
        <hr />
        <MusicList />
        <hr />
        <MusicList />
      </>
    )
  }
}

export default App
