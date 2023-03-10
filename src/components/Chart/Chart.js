import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => {
    return dataPoint.value;
  });
  const totalMax = Math.max(...dataPointValues);
  console.log(totalMax);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
