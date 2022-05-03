import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'table-component',
  styleUrl: 'table-component.css',
  shadow: true,
})
export class TableComponent {

  @Prop() users = []

  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        {
          this.users?.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))
        }
      </table>
    );
  }

}
