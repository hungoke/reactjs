import React, {Component} from 'react'

class Users extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-info">Add</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>

        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Full name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Users