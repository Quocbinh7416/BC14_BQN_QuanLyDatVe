import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import data from "./data/danhSachGhe.json";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bookingMovie">
        <div className="overlay ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning font-weight-bold display-4">
                  ĐẶT VÉ XEM PHIM
                </div>
                <div
                  className="mt-2 text-info font-weight-bold display-2 py-2"
                  style={{ fontSize: "20px" }}
                >
                  MÀN HÌNH
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                <div>{this.renderHangGhe()}</div>
              </div>
              <div className="col-4 ">
                <div
                  className="mt-2 text-warning font-weight-bold"
                  style={{ fontSize: "35px" }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
