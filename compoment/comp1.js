import React from "react";
import Setting from "../img/symbol.png";
import IconMenu from "../img/open-menu.png";

export default class Comp1 extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="a">
          <h3>Bài viết</h3>
          <div className="b">
            <img src={Setting} alt="" width={20} />
            <p>Bộ lọc</p>
          </div>
          <div className="b">
            <img src={Setting} alt="" width={20} />
            <p>Quản lý bài viết</p>
          </div>
        </div>
        <div className="e">
          <div className="icon-menu">
            <img src={IconMenu} alt="" />
            <p>Xem theo danh sach</p>
          </div>
          <div className="icon-menu">
            <div className="d">
              <div className="c" />
              <div className="c" />
            </div>
            <div className="d">
              <div className="c" />
              <div className="c" />
            </div>
            <div />
            <p>Xem theo danh sach</p>
          </div>
        </div>
      </div>
    );
  }
}
