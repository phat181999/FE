import Axios from "axios";
import Swal from 'sweetalert2';
import * as actType from "../Constans/actType";

export const actGetUserWorkAdminAPI = () => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url:
          "http://localhost:5000/api/work-user/get-all-admin",
      })
        .then((rs) => {
          dispatch(actGetUserWorkAdmin(rs.data));
          console.log(rs.data,"data");
        })
        .catch();
    };
};
export const handleDeleteUserWorkAdminAPI = id => {
  return () => {
    const token = localStorage.getItem('token');
    Axios({
      method: "DELETE",
      url: `http://localhost:5000/api/work-user/delete-work-user/${id}`,
      headers: {
        token: token
      }
    })
      .then((rs) => {
        Swal.fire("Xoá thành công!", "Nhấn OK để thoát!", "success");
      })
      .catch((error) => {
        Swal.fire(
          "Xoá không thành công !",
          error.response.data,
          "error"
        );
      });
    }
};
export const actGetDetailUserWorkAdminAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/work-user/get-detail-user-work/${id}`,
    })
      .then((rs) => {
        dispatch(actGetDetailUserWorkAdmin(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const acthandleUpdateUserWorkAdminAPI = (id,updateUserWork) => {
  return () => {
    const token = localStorage.getItem('token');
    Axios({
      method: "PUT",
      url: `http://localhost:5000/api/work-user/update-work-user/${id}`,
      headers: {
        token: token
      },
      data:updateUserWork
    })
      .then((rs) => {
        Swal.fire("Thành công!", "Nhấn OK để thoát!", "success");
        console.log(rs.data);
      })
      .catch((error) => {
        Swal.fire(
          "Không thành công !",
          error.response.data,
          "error"
        );
      });
    }
};
const actGetUserWorkAdmin = (listUserWork) => {
    return {
        type: actType.GET_LIST_USER_WORK_ADMIN,
        data: listUserWork,
    };
};
const actGetDetailUserWorkAdmin = (detailUserWorkAdmin) => {
  return {
      type: actType.DETAIL_USER_WORK_ADMIN,
      data: detailUserWorkAdmin,
  };
};