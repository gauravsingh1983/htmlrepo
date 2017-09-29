	
google.charts.load('current', {
  callback: drawChart,
  packages: ['gantt']
});

function drawChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1SROlONedShx-n0DRoUWO24sU_zKRFuXZZy-vK2z4cMI/gviz/tq?gid=0&headers=1');
  query.send(function (response) {
    if (response.isError()) {
      console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    };

    var options = {
        height: 600,
        gantt: {
          trackHeight: 30
        }
      };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
    chart.draw(response.getDataTable(), options);
  });
}
