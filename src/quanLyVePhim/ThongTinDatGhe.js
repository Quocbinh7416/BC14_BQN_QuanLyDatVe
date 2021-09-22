import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/datVeAction";

class ThongTinDatGhe extends Component {
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
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat) => {
                console.log(gheDangDat);
                return (
                  <tr key={gheDangDat.soGhe} className="text-warning">
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
