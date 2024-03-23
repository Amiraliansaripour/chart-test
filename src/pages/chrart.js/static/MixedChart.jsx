import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { UserData } from '../../../data/Data'
const MixedChart = () => {

  const [chartType,setChartType] =useState("")
  const [userData, setUserData] = useState({
    labels: UserData.map((y) => y.year),
    datasets: [{
      label: 'User Lost',
      data: UserData.map((l) => l.userLost),
      backgroundColor: [
        'red',
      ],
      borderColor: [
        'red',

      ],
      yAxisID: 'y'
    },
    {
      type: chartType,
      label: 'User Gain',
      data: UserData.map((l) => l.userGain),
      yAxisID: 'y1',
      borderColor: ["green","blue","yellow","orange","lightgreen"],
      backgroundColor:["green","blue","yellow","orange","lightgreen"],
    }
    ]
  })

  useEffect(()=>{
    setUserData({
      labels: UserData.map((y) => y.year),
    datasets: [{
      label: 'User Lost',
      data: UserData.map((l) => l.userLost),
      backgroundColor: [
        'red',
      ],
      borderColor: [
        'red',

      ],
      yAxisID: 'y'
    },
    {
      type: chartType,
      label: 'User Gain',
      data: UserData.map((l) => l.userGain),
      yAxisID: 'y1',
      borderColor: ["green","blue","yellow","orange","lightgreen"],
      backgroundColor:["green","blue","yellow","orange","lightgreen"],
    }
    ]
    })
  },[chartType])


  return (
    <>
      <h1>Mixed Chart</h1>

      <div className="chart-con" style={{flexDirection:"column"}}>
        <select onChange={(e)=>setChartType(e.target.value)}>
          <option name="Bar" value={"bar"}>Bar</option>
          <option name="Line" value={"line"}>Line</option>
          <option name="Pie" value={"pie"}>Pie</option>
          <option name="Doughnut" value={"doughnut"}>Doughnut</option>

        </select>
        <div className="chart">
          <Line
            data={userData}
            options={{
              
              scales: {
                y: {
                  type: "linear",
                  display: true,
                  // position:'left',
                  ticks: {
                    color: "rgba(0, 0, 0, 1)",
                  },
                  grid: {
                    drawBorder: true,
                    drawTicks: true,
                    color: "#fff",
                  },
                  title: {
                    display: true,
                    text: "User Lost",
                    font: {
                      size: 17
                    },
                  },
                },
                x:{
                  grid:{
                    color:"#fff"
                  }
                },

                y1: {
                  type:'linear',
                  display: true,
                  position: 'right',
                  title: {
                    display: true,
                    text: "User Gain",
                    font: {
                      size: 15
                    },
                  },
                }
              }
            }}
          />
        </div>
      </div>
    </>
  )
}

export default MixedChart