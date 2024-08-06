import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err=useRouteError();
  return <>
     <h1>{err.status}:{err.statusText}</h1>
    <h1>OOPS!!</h1>
    <h1>Something went wrong</h1>
  </>
};
export default Error;
