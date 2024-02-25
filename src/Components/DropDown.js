import React, { useContext } from "react";
import classes from './Chart.module.css';
import ChartContext from "./ChartContext";

const Dropdown = () => {

    // const context = useContext(ChartContext);

    const {updateChart} = useContext(ChartContext);


    const clickHandler = (value) => {
        updateChart(value);
        // context.updateChart(value);
    }


    return (
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}>Dropdown</button>
            <div className={classes.dropdownContent}>
                <a href="#" onClick={() => {clickHandler('bar_chart')}}>Bar Chart</a>
                <a href="#" onClick={() => {clickHandler('area_chart')}}>Area Chart</a>
            </div>
        </div>
    );
};

export default Dropdown;