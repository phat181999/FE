import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const divstyle = {
  margin: "0px 10px",
};
const text={
  textDecoration: 'none'
}

export default class TypeWork extends Component {
  render() {
    const { typeWork, onClick } = this.props;
    return (
      <Link style= {text} to={{pathname: "/list-job", state: {search: typeWork.titleWork === "Tất cả" ? "" : typeWork.titleWork}}}>
        <Button variant="contained" style={divstyle}>
          {typeWork.titleWork}
        </Button>
      </Link>
    );
  }
}
