// import React from 'react';
// import './Style.css';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     DatasetController,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );
// export default function Graph(props) {
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             }
//         },
//     };

//     const labels = props.labs; // get the data as props - props.xAxis
//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: "",
//                 data: props.d.data,
//                 borderColor: 'orange',
//                 backgroundColor: 'yellow'
//             },

//         ],
//     };

//     return <Line options={options} data={data} />;


// }
import React from "react";
import "./Style.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Filler,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    DatasetController,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export default function Graph(props) {
    const dataArr = props.data;
    const options = {
        scales: {
            x: {
                // <-- axis is not array anymore, unlike before in v2.x: '[{'
                grid: {
                    borderColor: "rgba(243, 156, 18, 1)", // <-- this line is answer to initial question
                    display: false,
                },
            },
            y: {
                // <-- axis is not array anymore, unlike before in v2.x: '[{'
                grid: {
                    // color: "rgba(0,255,0,0.1)",
                    borderColor: "rgba(243, 156, 18, 1)", // <-- this line is answer to initial question
                    display: false,
                },
            },
        },
        responsive: true,

        plugins: {


            legend: {
                position: "top",
                display: false,
            },
        },
    };

    //labs = labels = Xvalues
    //data = Yvalues
    const labels = props.labs
    const data = {
        labels,
        datasets: [

            {
                data: dataArr,
                fill: {
                    target: 'origin',
                    above: 'rgb(243, 156, 18, 1)',   // Area will be red above the origin
                },

                borderColor: '#7D56A5',
                backgroundColor: 'yellow',
                showLine: false
            }

        ],
    };
    //debugger
    console.log('labels' + labels);
    console.log('data :' + dataArr);
    return <Line options={options} data={data} />;


}