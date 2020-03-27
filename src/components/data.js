import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import PersonAdd from "@material-ui/icons/PersonAdd";
import GroupAdd from "@material-ui/icons/GroupAdd";

const mainMenu = [
    { id: 1, text: "NAV_BAR.HOME", Icon: <Home /> },
    { id: 2, text: "NAV_BAR.SEARCH", Icon: <SearchIcon /> }
  ];
  const nestedMenu = [
    { id: 3, text: "NAV_BAR.ADD_PERSON", Icon: <PersonAdd /> },
    { id: 4, text: "PROFILE.ADD_FRIEND", Icon: <GroupAdd /> }
  ];
  
  const topMenu = [
    // { id: 1, text: "TOP_MENU.HOME"},
    { id: 2, text: "TOP_MENU.PRODUCTS" },
    { id: 3, text: "TOP_MENU.SOLUTIONS" },
    { id: 4, text: "TOP_MENU.SERVICES" },
    { id: 5, text: "TOP_MENU.SUPPORT" },
    { id: 6, text: "TOP_MENU.PARTNERS" },
    { id: 7, text: "TOP_MENU.COMPANY" }
  ];
  const headCells = [
    { id: "id", numeric: false, disablePadding: false, label: "#" },
    { id: "name", numeric: false, disablePadding: false, label: "الاسم" },
    { id: "city", numeric: false, disablePadding: false, label: "المدينة" },
    { id: "NatId", numeric: false, disablePadding: false, label: "الرقم الوطني" },
    { id: "DoB", numeric: false, disablePadding: false, label: "تاريخ الميلاد" },
    {
      id: "specialist",
      numeric: false,
      disablePadding: false,
      label: "الاختصاص"
    },
    { id: "Actions", numeric: false, disablePadding: false, label: "" }
  ];
  function createData(id, name, city, NatId, DoB, specialist) {
    return { id, name, city, NatId, DoB, specialist };
  }
  
  const data = [
    createData(
      1,
      "مياس  تمين سلمان",
      `طرطوس`,
      1026010903,
      `23/02/1982`,
      `مطور تطبيقات وب`
    ),
    createData(
      2,
      "مياس سلمان",
      `طرطوس`,
      1026010903,
      `23/02/1982`,
      `مطور تطبيقات وب`
    ),
    createData(
      3,
      "مياس سلمان",
      `طرطوس`,
      1026010903,
      `23/02/1982`,
      `مطور تطبيقات وب`
    ),
    createData(
      4,
      "مياس سلمان",
      `طرطوس`,
      1026010903,
      `23/02/1982`,
      `مطور تطبيقات وب`
    ),
    createData(
      5,
      "مياس سلمان",
      `طرطوس`,
      1026010903,
      `23/02/1982`,
      `مطور تطبيقات وب`
    ),
    createData(
      6,
      "مياس سلمان",
      `طرطوس`,
      1026010903,
      `23/02/1982`,
      `مطور تطبيقات وب`
    ),
    createData(
      7,
      "مياس سلمان",
      `طرطوس`,
      1026010903,
      `23/02/1982`,
      `مطور تطبيقات وب`
    )
  ];
  
  const headerData = {
    headerTitle: "العاملون في الشركة"
  };
  export{mainMenu,nestedMenu,topMenu,headCells,data,headerData}