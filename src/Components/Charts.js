import React, { useContext, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from "recharts";
import ChartContext from "./ChartContext";

const Charts = (props) => {
    const [chartData, setChartData] = useState([]);

    const context = useContext(ChartContext);

    console.log(context.selectedChartType);

    useEffect(() => {
        fetchChartData();
    },[]);
    const fetchChartData = async () => {
        try {
            const data = await fetch('https://api.worldbank.org/v2/countries/IN/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json');
            const response = await data.json();
    
            setChartData(response[1]);
        
        } catch(error) {
            console.error(error);
        }
    };

    const renderChartData = () => {
        if(chartData.length) {
            const requiredChartData = chartData.map((item) => {
                return {
                    'name': item.date,
                    'gdp': item.value
                }
            }).reverse();

            return(
                <div style={{display:'flex', flexDirection:'column'}}>
                    {context.selectedChartType === 'bar_chart' 
                        ? renderBarChart(requiredChartData)
                        : renderAreaChartData(requiredChartData)
                    }
                </div>
            );
        }
    }

    const renderBarChart = (barChartData) => {

        return(
            <BarChart
                width={1000}
                height={600}
                data={barChartData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="gdp" fill="#8884d8" name="GDP of India" />
            </BarChart>
        )
    }

    function renderAreaChartData(areaChartData) {
        return (
            <AreaChart
                width={1000}
                height={600}
                data={areaChartData}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="gdp" stroke="#8884d8" fill="#8884d8" name="GDP of India" />
            </AreaChart>
        )
    }

    return(
        <div>
            {renderChartData()}
        </div>    
    );
};


export default Charts;