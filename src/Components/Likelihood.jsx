import React, {useState ,useContext, useEffect} from 'react';
import DataContext from '../AppContext/dataContext';
import Skeleton from './Skeleton';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
function Likelihood(){
    const {likelihood}=useContext(DataContext);
    const [chartData,setChartData]=useState();
    useEffect(()=>{
      if(likelihood==undefined||likelihood==null)
        return;
      console.log(likelihood);
      ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
      const keys =Object.keys(likelihood);
      const values =Object.values(likelihood);
      const resp_data={
      labels: keys,
      datasets:[
        {
        label:'Likelihood',
        data:values,
        backgroundColor: [
          'rgb(131,106,249)',
        //   'rgb(255,232,2)',
        //   'rgb(255,129,49)',
          'rgb(210,45,46)',
          'rgb(41,154,255)',
          'rgb(79,93,112)',
        //   'rgb(40,218,198)',
        //   'rgb(246,159,169)',
        //   'rgb(40,199,111)',
        //   'rgb(132,208,255)',
        //   'rgb(237,241,244)',
          'rgb(255,207,92)',
        //   'rgb(210,45,46)',
        //   'rgb(226,210,254)',
        //   'rgb(38,214,235)',
        //   'rgb(170,0,34)',
        //   'rgb(74,153,118)',
        //   'rgb(170,75,137)',
        //   'rgb(23,9,63)',
        //   'rgb(120,36,76)',
        //   'rgb(204,143,133)',
        //   'rgb(229,43,80)',
        //   'rgb(0,20,168)',
        //   'rgb(76,0,123)',
        //   'rgb(178,255,102)',
        ],
        borderWidth:0,
        }
        ]
      }
      setChartData(resp_data);
    },[likelihood]);
    const options={
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle'
            }
          }
        }
    };
    return(
        <div className='p-4 w-[600px] h-[650px] flex flex-col items-center graphcontainer rounded-lg'>
           <Skeleton></Skeleton>
            <div className='text-[30px] font-bold '>Likelihood</div>
            {chartData && <PolarArea data={chartData} options={options}/>}
        </div>
    )
};
export default Likelihood;