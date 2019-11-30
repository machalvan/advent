import React from "react";

export const Snow = () => {
  return (
    <div className="snow-container">
      <div className="snow foreground"/>
      <div className="snow foreground layered"/>
      <div className="snow middleground"/>
      <div className="snow middleground layered"/>
      <div className="snow background"/>
      <div className="snow background layered"/>
    </div>
  )
}