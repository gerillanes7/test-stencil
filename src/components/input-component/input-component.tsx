import { Component, h } from '@stencil/core';
import state from '../../store/store';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})
export class InputComponent {

  render() {

    return (
      <input onChange={(e) => state.searchTerm = (e.target as HTMLInputElement).value}/>
    );
  }

}
