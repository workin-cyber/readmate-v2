// const dataSrcInit = {
//     label: "",
//     data: [3, 5, 33, 70, 10, 40],
//     borderColor: "pink",
//     backgroundColor: "rgba(255, 99, 132, 0.5)",
// };

// const focusData = {
//     label: "",
//     data: [40, 7, 22, 30, 7, 40],
//     borderColor: "yellow",
//     backgroundColor: "rgba(255, 99, 132, 0.5)",
// };
// const readingData = {
//     label: "",
//     data: [10, 5, 17, 30, 2, 40],
//     borderColor: "red",
//     backgroundColor: "rgba(255, 99, 132, 0.5)",
// };
// const assesmentsData = {
//     label: "",
//     data: [3, 5, 33, 70, 10, 40],
//     borderColor: "pink",
//     backgroundColor: "rgba(255, 99, 132, 0.5)",
// };

// const lastWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
//     today = ['6:00', '10:00', '14:00', '18:00', '22:00'],
//     twoWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
//     month = ['Week1', 'Week2', 'Week3', 'Week4'];

// const fakeData = { dataSrcInit, assesmentsData, readingData, focusData, today, twoWeeks, lastWeek, month }
// export default fakeData

const dataSrcInit =
    [{ Value: 21.3, Date: '1/6/2022' },
    { Value: 23.4, Date: '3/6/2022' },
    { Value: 25.6, Date: '4/6/2022' }
    ]


let focusData =
    [{ Value: 11.3, Date: '6/20/2022' },
    { Value: 33.4, Date: '6/21/2022' },
    { Value: 22.3, Date: '6/22/2022' },
    { Value: 15.3, Date: '6/23/2022' },
    { Value: 25.6, Date: '6/24/2022' }
    ]

let readingData =
    [{ Value: 12, Date: '6/20/2022' },
    { Value: 30, Date: '6/21/2022' },
    { Value: 70, Date: '6/22/2022' },
    { Value: 50, Date: '6/23/2022' },
    { Value: 14, Date: '6/25/2022' }
    ]

let AssessmentData =
    [{ Value: 7, Date: '6/25/2022' },
    { Value: 30, Date: '6/26/2022' },
    { Value: 40, Date: '6/27/2022' }
    ]
// [ {date: "4/6/2022", result: {WPM: 95, STD: 4, CMP: 5}},
//   {date: "5/6/2022", result: {WPM: 87, STD: 3, CMP: 6}}
// ]


// const assessmentsData = {
//       last: 80,
//       data: [3,,33,70,10,40],
//     };

// const readingData = {
//         last: 8,
//         data: [10,5,30,,,,,,,,33,6,12,2,40],
//       };
// const focusData = {
//     last: 50,
//     data: yValues,
//   };

const fakeData = { focusData, readingData, AssessmentData }


//const fakeData= {dataSrcInit,assessmentsData,readingData,focusData,yValues,xValues,days,inputData}


export default fakeData