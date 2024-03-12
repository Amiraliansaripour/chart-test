import React, { useEffect, useRef, useState } from 'react'
import { createChart, ColorType } from 'lightweight-charts';
import ChartData from './../amirData.json'

const StaticChart = () => {
    const [ohlc, setOhlc] = useState()
    const chartContainerRef = useRef()

    // line data
    const lineData = ChartData.map(item =>({time: item[0]/1000 , value:(parseFloat(item[1]) + parseFloat(item[2])) / 2}))
    console.log(lineData);
    useEffect(() => {
        // create chart container and layout
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { color: "#222" },
                textColor: "#DDD"
            },

            grid: {
                vertLines: { color: "#444" },
                horzLines: { color: "#444" },
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
        })

        //   add chart Series Type
        const candleSeries = chart.addCandlestickSeries({
            upColor: "green",
            downColor: "red",
            borderVisible: false,
            wickUpColor: "green",
            wickDownColor: "red"
        })

        chart.subscribeCrosshairMove((param) => {
            const ohl = param.seriesData.get(candleSeries)
            setOhlc(ohl)
            console.log(ohl);
        })



        const chartBTC = ChartData.map((data) => {
            return { time: data[0] / 1000, open: parseFloat(data[1]) , high: parseFloat(data[2]), low: parseFloat(data[3]), close: parseFloat(data[4]) }
        })
        candleSeries.setData(chartBTC)


        //   add chart Series Type
        const lineSeries = chart.addLineSeries()
        lineSeries.setData(lineData)
        lineSeries.applyOptions({
            lineWidth:1
        })

        return () => {
            chart.remove()
        }
    }, [])
    return (
        <>
            <div className="ohlc">O:{ohlc?.open} C:{ohlc?.open} H:{ohlc?.high} L:{ohlc?.low}</div>
            <div ref={chartContainerRef}>

            </div>

            <div>
                <h1>Bitcoin</h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto voluptatibus magni. Cum nam, ea asperiores dicta nisi atque temporibus pariatur quis repellat nobis quos tempora? A, nesciunt quidem? Iure.</p>
            </div>
        </>
    )
}

export default StaticChart