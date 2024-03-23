import React, { useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { UserData } from '../../../data/Data'

const RadarChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData?.map((y) => y.year),
    datasets: [{
      label: 'User Data',
      data: UserData?.map((y) => y.userGain),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  })
  return (
    <>
      <h1>Radar Chart</h1>

      <div className="chart-con">
        <div className="chart">
          <Radar
            data={userData}
            options={{
              scales:{
                r:{
                  angleLines:{
                    color:'gray'
                  },
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

export default RadarChart