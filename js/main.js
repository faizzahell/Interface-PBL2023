document.addEventListener('DOMContentLoaded', function() {
  var data = {
    labels: ['Direction 1', 'Direction 2', 'Direction 3', 'Direction 4', 'Direction 5'],
    datasets: [{
      label: 'Data Motor Direction',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      data: [1, -1, 0, 1, 0],
      fill: false
    }]
  };

  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  var ctx = document.getElementById('myLineChart').getContext('2d');

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var opts = {
    angle: 0,
    lineWidth: 0.4,
    radiusScale: 1,
    pointer: {
      length: 0.6,
      strokeWidth: 0.035,
      color: 'rgba(75, 192, 192, 1)'
    },
    limitMax: true,
    limitMin: true,
    colorStart: '#00FF00',
    colorStop: '#FF0000',
    strokeColor: '#E0E0E0',
    generateGradient: true,
    highDpiSupport: true,
  };

  var target = document.getElementById('gaugeChart');
  var gauge = new Gauge(target).setOptions(opts);

  gauge.maxValue = 200;
  gauge.setMinValue(0);
  gauge.animationSpeed = 32;

  function updateColor(value) {
    if (value <= 80) {
      gauge.options.colorStart = '#00FF00';
      gauge.options.colorStop = '#00FF00';
    } else if (value >= 170) {
      gauge.options.colorStart = '#FF0000';
      gauge.options.colorStop = '#FF0000';
    } else {
      gauge.options.colorStart = '#6FADCF';
      gauge.options.colorStop = '#8FC0DA';
    }
  }

  var initialValue = 100;

  gauge.maxValue = 200;
  gauge.setMinValue(0);
  gauge.animationSpeed = 32;
  gauge.set(initialValue);

  updateColor(initialValue);

  setTimeout(function() {
    var updatedValue = 180;
    gauge.set(updatedValue);
    updateColor(updatedValue);
  }, 2000);
});

