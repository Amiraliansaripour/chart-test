import React, { useState } from 'react'
import { Bubble } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'

const BublleChart = () => {
  const fakeData = [
    {
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    },
    {
      x: 30,
      y: 25,
      r: 22
    }]
  const [userData, setUserData] = useState({
    datasets: [{
      label: 'User Data',
      data: fakeData.map((v,) => (v)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',

      ]
    }]
  })
  return (
    <>
      <h1>Bublle Chart</h1>

      <div className="chart-con">
        <div className="chart">
          <Bubble
            data={userData}
            key={fakeData.map((v, index) => index)}
            options={{
              scales: {
                y: {
                  grid: {
                    color: '#fff'
                  }
                },
                x: {
                  grid: {
                    color: '#fff'
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

export default BublleChart