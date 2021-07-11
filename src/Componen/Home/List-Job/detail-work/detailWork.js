import React, { Component } from 'react'
import { connect } from "react-redux";
import * as Action from  "../../../../ShareAll/Action/work";
import RenderDetailWork from './renderDetailWork';
import * as work from "../../../../ShareAll/Action/application"
class DetailWork extends Component {
  componentDidMount() {
    const {WorkID} = this.props;
    if (!WorkID) return false;
    this.props.getDetailWork(WorkID);
  }
  onShowDetail = (id) => {
    this.props.applyWork({jobId:id});
  };
  renderTable = () => {
    return <RenderDetailWork deitalWork={this.props.detailListWork} onShowDetail={this.onShowDetail}/>
  };

  componentWillUnmount() {
    this.props.resetDetailMovie();
  };

  componentDidUpdate(prveProps) {
    const {WorkID} = this.props;
    if (prveProps.WorkID !== WorkID) {
      this.props.getDetailWork(WorkID);
    }
  }
  render() {
    const {WorkID} = this.props;
    if (!WorkID) return null;
    return (
      <div>
        {this.renderTable()}
      </div>
    )
  }
};


const mapStateToProps = state => {
  return {
    detailListWork: state.workReducer.detailListWork
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailWork: id => {
      dispatch(Action.actGetDetailListWorkAPI(id));
    },
    resetDetailMovie: () => {
      dispatch(Action.actGetDetailListWorkAPI({}));
    },
    applyWork: (idJob) => {
      dispatch(work.actPostApplicationAPI(idJob));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailWork);