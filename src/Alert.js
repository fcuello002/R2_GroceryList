import React, { useEffect } from "react";

const Alert = (props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [props, props.list]);

  return <p className={`alert alert-${props.type}`}>{props.msg}</p>;
};

export default Alert;
