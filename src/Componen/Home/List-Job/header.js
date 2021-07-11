import React, { useEffect } from "react";
import TypeWork from "../type-work/typeWork";
import { connect } from "react-redux";
import * as Action from "../../../ShareAll/Action/typework";
import * as actionSearch from "../../../ShareAll/Action/work";
import { useHistory } from 'react-router-dom';
const divtStyle = {
  padding:' 17px 132px'
}
function Header(props) {
  const history = useHistory();
  useEffect(() => {
    props.getTypeListWork();
  }, []);

  const renderHTML = () => {
    return props.listTypeWork.map((typeWork) => {
      return (
        <TypeWork
          typeWork={typeWork}
        />
      );
    });
  };
  // const modifiedData = () =>{
  //   if(keywords){
  //     const newData = data
  //   }
  // }
  return <div style={divtStyle}>
    <TypeWork typeWork={{titleWork: "Tất cả"}} />
    {renderHTML()}
  </div>;
}
const mapStateToProp = (state) => {
  return {
    listTypeWork: state.typeworkReducer.listTypeWork,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListWork: (search) => {
      dispatch(actionSearch.actGetListWorkAPI(search));
    },
    getTypeListWork: () => {
      dispatch(Action.actGetTypeListWorkAPI());
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Header);
