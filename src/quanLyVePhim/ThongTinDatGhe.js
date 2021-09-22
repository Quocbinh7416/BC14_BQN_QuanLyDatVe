import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="text-left">
        <button className="gheDuocChon mt-4"></button>
        <span className="text-light px-2" style={{ fontSize: "30px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon mt-4"></button>
        <span className="text-light px-2" style={{ fontSize: "30px" }}>
          Ghế đang đặt
        </span>
        <br />

        <button className="ghe mt-4" style={{ marginLeft: 0 }}></button>
        <span className="text-light px-2" style={{ fontSize: "30px" }}>
          Ghế chưa đặt
        </span>
        <br />
        <div>
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "30px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}
