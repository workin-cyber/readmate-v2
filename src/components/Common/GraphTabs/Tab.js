// import React from "react";

// export default function Tab({ name, type, data, updateDataSource, updateSelectedTab, selectedTab, dataArrayName }) {
//     function click() {
//         updateDataSource(dataArrayName)
//         updateSelectedTab(name)
//     }
//     return (
//         <div className={selectedTab === name ? 'TabOn' : 'Tab'} onClick={click}>
//             <span className="type1">{data}</span> <span className="type"> {type}</span>
//             <div> {name}</div>
//         </div>
//     );
// }
import React from "react";

export default function Tab({
    tabName,
    last,
    tabMS,
    updateDataSource,
    updateSelectedTab,
    selectedTab,
    dataArrayName,
}) {
    function click() {
        updateDataSource(dataArrayName);
        updateSelectedTab(tabName);
    }
    return (
        <div className={selectedTab === tabName ? "TabOn" : "Tab"} onClick={click}>
            <div className="line">
                <div className="InText"> {last} </div>{" "}
                <div className="tabMS"> {tabMS}</div>
            </div>
            <div className="tabName">{tabName}</div>
        </div>
    );
}