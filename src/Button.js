import React, { Component } from 'react';
import './Button.scss'; // Tell webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <button className="Button" name="button">Button</button>;
  }
}

export default Button;
