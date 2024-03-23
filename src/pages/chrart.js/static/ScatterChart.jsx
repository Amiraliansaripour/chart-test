import React, { useState } from 'react'
import { Scatter } from 'react-chartjs-2'

const ScatterChart = () => {

  const [userData ,setUserData] =useState({
    datasets:[{
      label:'User Data',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: ["red", "green", "blue","yellow",]
  }]
  })
  return (
    <>
      <h1>Scatter Chart</h1>

      <div className="barchart chart-con">
        <div className="chart">
          <Scatter
            data={userData}
            options={{
              scales:{
                y:{
                  grid:{
                    color:'#fff'
                  }
                },
                x:{
                  grid:{
                    color:'#fff'
                  }
                }
               }
            }}
          />
        </div>
      </div>
    </>
  )
}

export default ScatterChart