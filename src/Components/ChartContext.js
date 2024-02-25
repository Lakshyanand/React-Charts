import React from "react";

const ChartContext = React.createContext({
    selectedChartType: 'bar_chart',
    updateChart: (chart) => {}
});

export default ChartContext;