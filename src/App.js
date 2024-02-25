import { useState } from 'react';
import './App.css';
import Charts from './Components/Charts';
import Dropdown from './Components/DropDown';
import Header from './Components/Header';
import ChartContext from './Components/ChartContext';
import ChartProvider from './Components/ChartProvider';

function App() {

  const [chart, setChart] = useState('bar_chart');

  const setChartFunction = (value) => {
    setChart(value);
  }

  return (
    // <div className="App">
    <ChartProvider>
      <Header />
      <Dropdown />
      {/* <Dropdown updateChart={setChartFunction}/> */}
      <Charts chart={chart}/>
    </ChartProvider>
    // </div>
  );
}

export default App;
