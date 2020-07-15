// var grid = GridStack.init({
//   alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   ),
//   resizable: {
//     handles: "e, se, s, sw, w",
//   },
//   removable: "#trash",
//   removeTimeout: 100,
//   acceptWidgets: ".newWidget",
// });

// grid.on("added removed change", function (e, items) {
//   var str = "";
//   items.forEach(function (item) {
//     str += " (x,y)=" + item.x + "," + item.y;
//   });
// });

// // TODO: switch jquery-ui out

// $(".newWidget").draggable({
//   revert: "invalid",
//   scroll: false,
//   appendTo: "body",
//   helper: "clone",
// });

// var theDiv = document.getElementsByClassName("grid-stack-item");

// ----------------------------------------------------------
var ctx = document.getElementById("myChart_1");
var ctx1 = document.getElementById("myChart_12");
var ctx2 = document.getElementById("myChart_123");

// chart1;
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});

// chart2;
var myChart = new Chart(ctx1, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});
// chart3
var myChart = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});
// --------------------------------------------

var options = {
  float: false,
};

$(".grid-stack").gridstack({
  animate: true,
  auto: true,
  width: 12,
  float: true,
  vertical_margin: 0,
  always_show_resize_handle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ),
  resizable: {
    handles: "e, se, s, sw, w",
  },
});
new (function () {
  this.items = [{ x: 0, y: 0, width: 3, height: 4 }];

  this.grid = $(".grid-stack").data("gridstack");

  this.addNewWidget = function () {
    var node = this.items.pop() || {
      x: 3,
      y: 4,
      width: 3,
      height: 4,
    };
    var divId = Math.random();
    this.grid.addWidget(
      $(
        '<div><div class="panel panel--default grid-stack-item-content"><header class="panel__header"><h4 data-id="RandomChart' +
          divId +
          '">Random Chart ' +
          divId +
          '</h4></header><div class="panel__content"><canvas id="myChart_' +
          divId +
          '"></canvas></div></div></div>'
      ),
      node.x,
      node.y,
      node.width,
      node.height
    );
    var ctx = document.getElementById("myChart_" + divId);
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [7, 1, 92],
            backgroundColor: [
              "rgb(255, 69, 96)",
              "rgba(0, 0, 0, 0.6)",
              "rgb(206, 148, 73)",
            ],
            borderWidth: 0,
            hoverBackgroundColor: [
              "rgb(255, 69, 96)",
              "rgba(0, 0, 0, 0.6)",
              "rgb(206, 148, 73)",
            ],
            hoverBorderWidth: 0,
          },
          {
            data: [7, 1, 92],
            backgroundColor: ["#FFFFFF", "rgba(0, 0, 0, 0.6)", "#FFFFFF"],
            borderWidth: 0,
            hoverBackgroundColor: ["#FFFFFF", "rgba(0, 0, 0, 0.6)", "#FFFFFF"],
            hoverBorderWidth: 0,
          },
        ],
      },
      options: {
        rotation: -3.1415926535898,
        circumference: 3.1415926535898,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        title: {
          display: true,
          text: 4,
          position: "bottom",
        },
      },
    });
    return false;
  }.bind(this);

  $("#add-new-widget").click(this.addNewWidget);
})();

var ctx = document.getElementById("myChart_123");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});

// var myChart = new Chart(ctx, {
//   type: "pie",
//   data: {
//     datasets: [
//       {
//         data: [7, 1, 92],
//         backgroundColor: [
//           "rgb(255, 69, 96)",
//           "rgba(0, 0, 0, 0.6)",
//           "rgb(206, 148, 73)",
//         ],
//         borderWidth: 0,
//         hoverBackgroundColor: [
//           "rgb(255, 69, 96)",
//           "rgba(0, 0, 0, 0.6)",
//           "rgb(206, 148, 73)",
//         ],
//         hoverBorderWidth: 0,
//       },
//       {
//         data: [7, 1, 92],
//         backgroundColor: ["#FFFFFF", "rgba(0, 0, 0, 0.6)", "#FFFFFF"],
//         borderWidth: 0,
//         hoverBackgroundColor: ["#FFFFFF", "rgba(0, 0, 0, 0.6)", "#FFFFFF"],
//         hoverBorderWidth: 0,
//       },
//     ],
//   },
//   options: {
//     rotation: -3.1415926535898,
//     circumference: 3.1415926535898,
//     legend: {
//       display: false,
//     },
//     tooltips: {
//       enabled: false,
//     },
//     title: {
//       display: true,
//       text: 4,
//       position: "bottom",
//     },
//   },
// });
