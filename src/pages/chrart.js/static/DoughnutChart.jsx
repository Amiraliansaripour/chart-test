import React, { useState } from 'react'
import { Chart as ChartJs } from 'chart.js/auto'
import { UserData } from '../../../data/Data'
import { Pie } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = () => {
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
      ]
    }]
  })
  return (
    <>
      <h1>Doughnut Chart</h1>

      <div className="barchart chart-con">
        <div className="chart">
          <Pie
            data={userData}
            options={{
              aspectRatio: 1
            }}
          />
        </div>

        <div className="chart">
          <Doughnut
            data={userData}
            options={{
              aspectRatio: 1
            }}
          />
        </div>
      </div>

    </>
  )
}

export default DoughnutChart