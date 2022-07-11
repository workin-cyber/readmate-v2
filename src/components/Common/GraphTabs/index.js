// import React, { useState } from "react";
// import fakeData from "./fakeData";
// import Graph from "./Graph";
// import SelectPeriod from "./SelectPeriod";
// import "./style.css";
// import Tab from "./Tab";

// export default function GraphContainer() {
//     const [period, setPeriod] = useState(fakeData.lastWeek);
//     const [dataSrc, setDataSrc] = useState(fakeData.dataSrcInit);
//     const [selectedTab, setSelectedTab] = useState("Assesments");
//     const tabs = [
//         {
//             name: "Assesments",
//             dataArrayName: "assesmentsData",
//             type: "Wpm",
//             data: fakeData.assesmentsData.data[fakeData.assesmentsData.data.length - 1]
//         },
//         {
//             name: "Reading",
//             dataArrayName: "readingData",
//             type: "Lpm",
//             data: fakeData.readingData.data[fakeData.readingData.data.length - 1]


//         },
//         {
//             name: "Focus",
//             dataArrayName: "focusData",
//             type: "CM",
//             data: fakeData.focusData.data[fakeData.focusData.data.length - 1]

//         },

//     ];

//     return (
//         <div className="DashGraph">
//             <div className="Tabs">
//                 {tabs.map((tab) => {
//                     return <Tab
//                         name={tab.name}
//                         type={tab.type}
//                         data={tab.data}
//                         dataArrayName={tab.dataArrayName}
//                         selectedTab={selectedTab}
//                         updateSelectedTab={(tabName) => {
//                             setSelectedTab(tabName);
//                         }}
//                         updateDataSource={(data) => {
//                             setDataSrc(fakeData[data]);
//                         }}
//                     />;
//                 })}
//             </div>
//             <div className="SelectBtn">
//                 <SelectPeriod updatePeriod={(peri) => {
//                     setPeriod(fakeData[peri]);
//                 }} />
//             </div>
//             <div className="Graph">
//                 <Graph d={dataSrc} labs={period} />
//             </div>
//         </div>
//     );

// }

import React, { useState, useContext } from "react";
import fakeData from "./fakeData";
import Graph from "./Graph";
import "./Style.css";
import Tab from "./Tab";
// import { dataContext } from '../../../context/context'

let formatDate = (date) => {
    let year = new Date(date).getFullYear();
    let month = new Date(date).getMonth() + 1;
    let day = new Date(date).getDate();
    return `${month}/${day}/${year}`;
};


export default function GraphDashboard() {
    // const localDataContext = useContext(dataContext)
    const localDataContext = fakeData
    // let focusData = localDataContext.userDetails.TF;
    // let readingData = localDataContext.userDetails.TR;
    // let assessmentData = localDataContext.userDetails.assesmentResults;
    let focusData = localDataContext.focusData
    let readingData = localDataContext.readingData
    let assessmentData = localDataContext.AssessmentData

    const [dataSrc, setDataSrc] = useState(buildData(fakeData.focusData));
    const [selectedTab, setSelectedTab] = useState("Assessments");

    //build the graph details
    function buildData(objName) {//objName contails the dots on the graph (y=as value, x=as date)
        //debugger
        //const oName = focusData[]
        let xValues = [];
        let yValues = [];
        let graphData = {};

        //initial day - the first day that we have in our dots
        let initialDay = new Date(formatDate(objName[0].Date));
        //till today
        let st = new Date();
        let hefresh = st - initialDay;
        //gets the days list on the x-values 
        let days = Math.floor(hefresh / (1000 * 3600 * 24));

        // create empty graphData

        for (let index = 0; index < days; index++) {
            st.setDate(initialDay.getDate() + index);
            graphData[formatDate(st)] = "";
            xValues[index] = formatDate(st);
        }
        // load input into graph
        //graphData will be an array that contains places for all dates on graph and has values only where we have value
        objName.map((res) => {
            return graphData[formatDate(res.Date)] = res.Value;
        });

        let c = 0;
        let lastVal = 0;
        Object.keys(graphData).forEach(key => {
            if (graphData[key] == '')
                yValues[c] = null;
            else {
                yValues[c] = graphData[key];
                lastVal = graphData[key];
            }
            c++;
        });
        let output = { xValues: xValues, yValues: yValues }
        return (output)

    }

    const ass = fakeData.AssessmentData[fakeData.AssessmentData.length - 1].Value,
        read = fakeData.readingData[fakeData.readingData.length - 1].Value,
        focus = fakeData.focusData[fakeData.focusData.length - 1].Value;
    const tabParams = { ass: ass, read: read, focus: focus }

    const tabs = [
        {
            tabName: "Assessments",
            last: `${tabParams.ass} WPM`,
            dataArrayName: fakeData.AssessmentData
        },
        {
            tabName: "Reading",
            last: `${tabParams.read} LPM`,
            dataArrayName: fakeData.readingData,
        },
        {
            tabName: "Focus",
            last: `${tabParams.focus} CM`,
            dataArrayName: fakeData.focusData,
        },

    ]

    return (
        <>
            <div className="Graph">
                <div className="DashGraph   back-purple right">
                    <div className="Tabs">
                        {tabs.map((tab) => {
                            return (
                                <Tab
                                    tabName={tab.tabName}
                                    last={tab.last}
                                    tabMS={tab.tabMS}
                                    dataArrayName={tab.dataArrayName}
                                    selectedTab={selectedTab}
                                    updateSelectedTab={(tabName) => {
                                        setSelectedTab(tabName);
                                    }}
                                    updateDataSource={(objName) => {
                                        setDataSrc(buildData(objName));
                                    }}
                                />
                            );
                        })}
                    </div>
                    <Graph data={dataSrc.yValues} labs={dataSrc.xValues} />

                </div>
            </div>
        </>
    );
}