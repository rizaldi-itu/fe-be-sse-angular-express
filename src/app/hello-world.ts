import { Component, Input } from '@angular/core';

@Component({
  selector: `hello-world`,
  template: `
    <h2>Hello World</h2>
    <p>Component Hello World</p>
    <p>{{ value }}!</p>
  `,
})
export class HelloWorldComponent {
  constructor() {}
  value: string = '';

  title = 'first-app';

  setValue(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}
