import React, { useState } from 'react'
import { PolarArea } from 'react-chartjs-2'
import { UserData } from '../../../data/Data'
const PolarChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData?.map((y) => y.year),
    datasets: [{
      label: 'User Data',
      data: UserData?.map((y) => y.userGain),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
      ],
     
    }]
  })
  return (
    <>
      <h1>Polar Chart</h1>

      <div className="chart-con">
        <div className="chart">
          <PolarArea
            data={userData}
            options={{
              responsive: true,
            
              scales:{
                r:{
                  color: 'gray',
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

export default PolarChart