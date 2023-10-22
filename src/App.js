import {Component} from 'react'

import TableItem from './TableItem.js'

import './App.css'

class App extends Component {
  state = {
    usersList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    const {users} = data
    this.setState({
      usersList: users,
    })
  }

  render() {
    const {usersList} = this.state
    console.log(usersList)
    return (
      <div>
        <h1> Dummy Data</h1>
        <table>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
          {usersList.map(user => (
            <TableItem user={user} key={user.id} />
          ))}
        </table>
      </div>
    )
  }
}

export default App