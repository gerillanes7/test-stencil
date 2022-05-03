import { Component, Host, h, Method } from '@stencil/core';
import axios from 'axios';
import state from '../../store/store';

@Component({
  tag: 'home-component',
  styleUrl: 'home-component.css',
  shadow: true,
})
export class HomeComponent {

  @Method()
  async getUsers() {
    const usersApi = await axios.get('https://jsonplaceholder.typicode.com/users')
    state.users = usersApi.data;
  }

  componentWillLoad() {
    this.getUsers()
  }

  render() {
    return (
      <Host>
        <input-component></input-component>
        <button-component></button-component>
        <table-component users={state.users}></table-component>
        <h1>{state.searchTerm}</h1>
      </Host>
    );
  }

}
