import Lists from "./Lists";
import { BarChart, BublleChart, ChartList, DoughnutChart, LightweightList, LineChart, MixedChart, PolarChart, RadarChart, ScatterChart } from "./pages";

export const route =[
    {path:'/',component:<Lists />},
    {path:'/chartjs', component:<ChartList />},
    {path:'/lightweight',component:<LightweightList/>},

    // Chart.js
    {path:'/chartjs/bar',component:<BarChart/>},
    {path:'/chartjs/bublle',component:<BublleChart/>},
    {path:'/chartjs/doughnut',component:<DoughnutChart/>},
    {path:'/chartjs/line',component:<LineChart/>},
    {path:'/chartjs/mixed',component:<MixedChart/>},
    {path:'/chartjs/polar',component:<PolarChart/>},
    {path:'/chartjs/radar',component:<RadarChart/>},
    {path:'/chartjs/scatter',component:<ScatterChart/>},


]