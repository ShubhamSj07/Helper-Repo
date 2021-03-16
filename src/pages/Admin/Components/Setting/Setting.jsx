import React from "react";
import style from "./setting.module.scss";

export function Setting(props) {
  return (
    <React.Fragment>
      <h1 className={style["h1"]}>Settings</h1>
      <div className={style["container"]}>
        <div className={style["contain"]}>
          <div className={style["card"]}>
            <p className={style["para"]} onClick={() => props.setTab(0)}>
              My Profile
            </p>
          </div>
          <div className={style["card"]}>
            <p className={style["para"]} onClick={() => props.setTab(7)}>
              Invite Admin
            </p>
          </div>
          <div className={style["card"]}>
            <p className={style["para"]} onClick={() => props.setTab(8)}>
              Manage Admins
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
