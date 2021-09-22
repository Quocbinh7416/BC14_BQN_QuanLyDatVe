import { HUY_GHE, DAT_GHE } from "../constants";

const stateDefault = {
  danhSachGheDangDat: [
    // { soGhe: "A1", gia: 1000 },
    // { soGhe: "B1", gia: 1000 },
  ],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        // xoa ghe dang dat
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // them ghe
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      console.log(action);
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe
      );
      console.log(index);

      if (index !== -1) {
        // xoa ghe dang dat
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
