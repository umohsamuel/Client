import React, { Component } from "react";

export class Circle extends Component {
  render() {
    return (
      <div className=" bg-[#B1B0B0] rounded-full tablet:w-8 mobile:w-6 tablet:h-8 mobile:h-6  flex justify-center items-center font-bold text-white">
        {this.props.children}
      </div>
    );
  }
}

export default Circle;
