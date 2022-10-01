import React, { Component } from 'react'

export default class TickectInfo extends Component {
  render() {
    return (
      <table className='table' border={2}>
        <thead>
          <tr style={{ fontSize: 16 }}>
            <td>Số Ghế</td>
            <td>Giá</td>
            <td></td>
          </tr>

        </thead>
        <tbody>
          <tr>
            <th>Số Ghế</th>
            <th>Giá</th>
            <th></th>
          </tr>

        </tbody>
      </table>
    )
  }
}
