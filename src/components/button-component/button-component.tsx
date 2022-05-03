import { Component, Host, h, Method } from '@stencil/core';
import state from '../../store/store';

@Component({
  tag: 'button-component',
  styleUrl: './button-component.css',
  shadow: true,
})
export class ButtonComponent {

  @Method()
  filterUsers(userName: string) {
    const usersFiltered = state.users.filter(user => userName !== user.name)
    state.users = usersFiltered
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.filterUsers(state.searchTerm)}>Search</button>
      </Host>
    );
  }

}
