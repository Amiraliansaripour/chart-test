import React from 'react'
import { Link } from 'react-router-dom'

const ChartList = () => {
    const chartTypes =[
        {name:"Bar Chart",route:'/chartjs/bar'},
        {name:"Bubble Chart",route:'/chartjs/bublle'},
        {name:"Doughnut Chart",route:'/chartjs/doughnut'},
        {name:"Line Chart",route:'/chartjs/line'},
        {name:"Mixed Chart",route:'/chartjs/mixed'},
        {name:"Polar Chart",route:'/chartjs/polar'},
        {name:"Radar Chart",route:'/chartjs/radar'},
        {name:"Scatter Chart",route:'/chartjs/scatter'},
        {name:"Comming soon ...",route:'/chartjs/commingsoon'},

    ]
  return (
    <>
    <div className="items">
        <h1>Chart Types</h1>
        {
            chartTypes.map((type,index)=>{
                return(
                    <div className="item" key={index}>
                        <Link to={type.route}>{type.name}</Link>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default ChartList