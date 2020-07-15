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

// chart2;

// chart3

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
    var divId = Math.ceil(Math.random() * 3);
    // var divId = Math.random();
    // console.log(divId);
    this.grid.addWidget(
      $(
        '<div><div class="panel panel--default grid-stack-item-content"><header class="panel__header"><h4 data-id="RandomChart' +
          divId +
          '">Chart ' +
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
    if (divId === 1) {
      var ctx11 = document.getElementById("myChart_" + divId);

      var myChart = new Chart(ctx11, {
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
    } else if (divId === 2) {
      var ctx12 = document.getElementById("myChart_" + divId);
      var myChart = new Chart(ctx12, {
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
    } else {
      var ctx13 = document.getElementById("myChart_" + divId);
      var myChart = new Chart(ctx13, {
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
    }
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
