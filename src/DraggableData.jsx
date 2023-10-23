import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-dragdata";

const DraggableGraph = (props) => {
  console.log("PROPS:", props.data);
  const state = {
    dataSet: [
      [
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        4,
        65,
        59,
        80,
        81,
        56,
        55,
        40
      ],
      [
        35,
        39,
        50,
        91,
        46,
        85,
        10,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40
      ],
      props.data
    ],
    labels: [
      "00:15",
      "00:30",
      "00:45",
      "01:00",
      "01:15",
      "01:30",
      "01:45",
      "02:00",
      "02:15",
      "02:30",
      "02:45",
      "03:00",
      "03:15",
      "03:30",
      "03:45",
      "04:15",
      "04:30",
      "04:45",
      "05:00",
      "05:15",
      "05:30",
      "05:45",
      "06:00",
      "06:15",
      "06:30",
      "06:45",
      "07:00",
      "07:15",
      "07:30",
      "07:45",
      "08:15",
      "08:30",
      "08:45",
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45"
    ],
    options: {
      tooltips: { enabled: true },
      scales: {
        xAxes: [
          {
            gridLines: { display: false, color: "blue" },
            ticks: { fontColor: "#3C3CC", fontSize: 14 }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Color Strength",
              fontSize: 12
            },
            ticks: {
              display: true,
              min: -5,
              max: 100,
              scaleSteps: 50,
              scaleStartValue: -50,
              maxTicksLimit: 4,
              fontColor: "#9B9B9B",
              padding: 30,
              callback: (point) => (point < 0 ? "" : point)
            },
            gridLines: {
              display: true,
              offsetGridLines: true,
              color: "3C3C3C",
              tickMarkLength: 4
            }
          }
        ]
      },
      legend: {
        display: true
      },
      dragData: true,
      dragOptions: {
        showTooltip: true
      },
      dragDataRound: 1,
      onDragStart: function (e) {
        console.log("Start:", e);
      },
      onDrag: function (e, datasetIndex, index, value) {
        console.log("Drag:", datasetIndex, index, value);
      },
      onDragEnd: function (e, datasetIndex, index, value) {
        console.log("End:", datasetIndex, index, value, this.state);
        // const set = this.state.dataSet;
        // set[datasetIndex][index] += 5;
        // setState({
        //   dataSet: set
        // });
      }.bind(this)
    }
  };

  console.log("RENDER");
  const data = {
    labels: state.labels,
    datasets: [
      {
        label: "FC_Prod",
        data: state.dataSet[1],
        lineTension: 0,
        borderColor: "5B9C9B",
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 12.5,
        pointBackgroundColor: "red",
        pointBorderWidth: 0,
        spanGaps: false
      }
    ]
  };
  return (
    <div>
      <Line data={data} options={state.options} />
    </div>
  );
};

export default DraggableGraph;
