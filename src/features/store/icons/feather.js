import React from "react";
import nanoid from "nanoid";

import Activity from "./feather/Activity";
import Airplay from "./feather/Airplay";
import AlertCircle from "./feather/AlertCircle";
import AlertOctagon from "./feather/AlertOctagon";
import AlertTriangle from "./feather/AlertTriangle";
import AlignCenter from "./feather/AlignCenter";
import AlignJustify from "./feather/AlignJustify";
import AlignLeft from "./feather/AlignLeft";
import AlignRight from "./feather/AlignRight";
import Anchor from "./feather/Anchor";

export default [
  {
    id: nanoid(),
    name: "Activity",
    component: <Activity />
  },
  {
    id: nanoid(),
    name: "Airplay",
    component: <Airplay />
  },
  {
    id: nanoid(),
    name: "Alert circle",
    component: <AlertCircle />
  },
  {
    id: nanoid(),
    name: "Alert octagon",
    component: <AlertOctagon />
  },
  {
    id: nanoid(),
    name: "Alert triangle",
    component: <AlertTriangle />
  },
  {
    id: nanoid(),
    name: "Align center",
    component: <AlignCenter />
  },
  {
    id: nanoid(),
    name: "Align justify",
    component: <AlignJustify />
  },
  {
    id: nanoid(),
    name: "Align left",
    component: <AlignLeft />
  },
  {
    id: nanoid(),
    name: "Align right",
    component: <AlignRight />
  },
  {
    id: nanoid(),
    name: "Anchor",
    component: <Anchor />
  }
];
