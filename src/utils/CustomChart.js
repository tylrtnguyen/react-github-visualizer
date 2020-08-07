import Chart from 'chart.js';

const buildScales = axes => {
  const scales = {
    xAxes: [
      {
        ticks: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 12
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: 'Montserrat-Regular',
          fontSize: 12
        },
      },
    ]
  }
  return axes ? scales : null;
}

const buildLegend = legend => {
  const leg = {
    position: 'right',
    labels: {
      fontFamily: 'Poppins-Light',
      fontSize: 12
    },
  };
  return legend ? leg : null;
};

const CustomChart = config => {
  const { context, chartType, labels, data, backgroundColor, borderColor, axes, legend } = config;

  return new Chart(context, {
    type: chartType,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        }
      ]
    },
    options: {
      scales: buildScales(axes),
      legend: buildLegend(legend),
      tooltips: {
        titleFontFamily: 'Poppins-SemiBold',
        bodyFontFamily: 'Poppins-Regular',
        cornerRadius: 3,
      },
    },
  });
};

export default CustomChart;