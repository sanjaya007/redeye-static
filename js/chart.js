const firstConfig = {
  type: "pie",
  data: {
    labels: ["Sale", "Reserves", "Minting Fund", "Team", "Drops/Promotions"],
    datasets: [
      {
        label: "RED EYE",
        data: [40, 30, 15, 10, 5],
        backgroundColor: [
          "#DD3239",
          "#32DDDD",
          "#32DD76",
          "#FE6A16",
          "#FEE716",
        ],
        borderColor: ["#DD3239", "#32DDDD", "#32DD76", "#FE6A16", "#FEE716"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#f1f1f1",
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
};

const secondConfig = {
  type: "pie",
  data: {
    labels: [
      "Development",
      "Marketing Partnerships",
      "Platform Expansion",
      "Reserves",
    ],
    datasets: [
      {
        label: "RED EYE",
        data: [30, 30, 15, 15],
        backgroundColor: ["#FECB16", "#EBFE16", "#1665FE", "#16FEFE"],
        borderColor: ["#FECB16", "#EBFE16", "#1665FE", "#16FEFE"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#f1f1f1",
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
};

var myChart = new Chart(document.getElementById("firstChart"), firstConfig);
var myChart2 = new Chart(document.getElementById("secondChart"), secondConfig);

// let ctx = document.getElementById("firstChart").getContext("2d");
// let labels = ["Pizza 🍕", "Taco 🌮", "Hot Dog 🌭", "Sushi 🍣"];
// let colorHex = ["#FB3640", "#EFCA08", "#43AA8B", "#253D5B"];

// let myChart = new Chart(ctx, {
//   type: "pie",
//   data: {
//     datasets: [
//       {
//         data: [30, 10, 40, 20],
//         backgroundColor: colorHex,
//       },
//     ],
//     labels: labels,
//   },
//   options: {
//     responsive: true,
//     legend: {
//       position: "bottom",
//     },
//     plugins: {
//       datalabels: {
//         color: "#fff",
//         anchor: "end",
//         align: "start",
//         offset: -10,
//         borderWidth: 2,
//         borderColor: "#fff",
//         borderRadius: 25,
//         backgroundColor: (context) => {
//           return context.dataset.backgroundColor;
//         },
//         font: {
//           weight: "bold",
//           size: "10",
//         },
//         formatter: (value) => {
//           return value + " %";
//         },
//       },
//     },
//   },
// });
