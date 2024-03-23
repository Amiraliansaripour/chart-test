import React, { useEffect, useRef, useState } from 'react'
import { createChart, ColorType } from 'lightweight-charts';
import ChartData from './../data/amirData.json'
import Daata from './../data/ticker.json'
const EthChart = () => {
    const [ohlc, setOhlc] = useState()
    const chartContainerRef = useRef()
    const baseChart = [];

    // line data
    useEffect(() => {
        for(const time in Daata.Open){
            const timeData = {
                time: parseInt(time),
                open: Daata.Open[time],
                high: Daata.High[time],
                low: Daata.Low[time],
                close: Daata.Close[time]
              };

              baseChart.push(Object.values(timeData));
        }
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
           
        })




        const chartBTC = ChartData.map((data,index) => {
            const bb = { time: data[0], open: parseFloat(data[1]) , high: parseFloat(data[2]), low: parseFloat(data[3]), close: parseFloat(data[4]) ,id:index }
            // console.log(bb);
            return bb
        })
        candleSeries.setData(chartBTC)
        chart.applyOptions({
            localization:{
                timeFormatter: (timestamp) => {
                    return new Date(timestamp * 1000).toLocaleString('en-GB');
               }
            }
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
                <h1>ETH</h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto voluptatibus magni. Cum nam, ea asperiores dicta nisi atque temporibus pariatur quis repellat nobis quos tempora? A, nesciunt quidem? Iure.</p>
            </div>
        </>
    )
}

export default EthChart