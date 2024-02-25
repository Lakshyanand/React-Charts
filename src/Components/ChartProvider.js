import React, { useState } from "react";
import ChartContext from "./ChartContext";

const ChartProvider = (props) => {

    const [selectedChartType, setSelectedChartType] = useState('bar_chart');

    const updateChartType = (type) => {
        setSelectedChartType(type);
      };

    const context = {
        selectedChartType: selectedChartType,
        updateChart: updateChartType
    }

    return(
        <ChartContext.Provider value={context}>
            {props.children}
        </ChartContext.Provider>
    );
};

export default ChartProvider;