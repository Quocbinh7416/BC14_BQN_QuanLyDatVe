import React, { Component } from "react";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
      }
      return (
        <button className={`ghe ${cssGheDaDat} font-weight-bold`} key={index}>
          {ghe.soGhe}
        </button>
      );
    });
  };
  render() {
    const { hangGhe } = this.props;

    return (
      <div
        className="text-light text-left ml-5 mt-5"
        style={{ fontSize: "30px" }}
      >
        {hangGhe.hang} {this.renderGhe()}
      </div>
    );
  }
}
