import { Button, IconButton } from "@material-ui/core";
import {
  AccessAlarm,
  Duo,
  ExpandMore,
  Inbox,
  Label,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
  WatchLater,
} from "@material-ui/icons";
import React from "react";
import SidebarOption from "./SidebarOption.js";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice.js";

function Sidebar() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        style={{ fontSize: "15px" }}
        onClick={() => dispatch(openSendMessage())}
      >
        <div className="add"></div>
        Redactar
      </Button>
      <div className="button" onClick={() => history.push("/")}>
        <SidebarOption
          Icon={Inbox}
          title="Recibidos"
          number={54}
          selected={true}
        />
      </div>

      <SidebarOption Icon={Star} title="Destacados" number={10} />
      <SidebarOption Icon={WatchLater} title="Pospuestos" number={22} />
      <SidebarOption Icon={LabelImportant} title="Importantes" number={13} />
      <SidebarOption Icon={NearMe} title="Enviados" number={42} />
      <SidebarOption Icon={Note} title="Borradores" number={12} />
      <SidebarOption Icon={ExpandMore} title="Mas" number={5} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
