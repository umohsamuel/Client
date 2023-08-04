import React, { Component } from "react";

export class Circle extends Component {
  render() {
    return (
      <div className=" bg-[#B1B0B0] rounded-full w-8 h-8 flex justify-center items-center font-bold text-white">
        {this.props.children}
      </div>
    );
  }
}

export default Circle;
