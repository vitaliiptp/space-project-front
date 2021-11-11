// import React, {useContext} from "react";
// import { useLocation } from "react-router-dom";
// import NavigationContext from "../../context/NavigationContext";
//
//
//
// const useActiveTab = () => {
//     const { activeTab, setActiveTab } = useContext(NavigationContext);
//
//
//     //assigning location variable
//     const location = useLocation();
//     //destructuring pathname from location
//     const { pathname } = location;
//     //Javascript split method to get the name of the path in array
//     const splitLocation = pathname.split("/");
//     setActiveTab(splitLocation[1])
//
//
//     return activeTab
// }
//
// export default useActiveTab;