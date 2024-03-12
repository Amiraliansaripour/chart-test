import React from 'react'
import { Link } from 'react-router-dom'

const Lists = () => {
    const crypto = [
        {
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            name: 'Bitcoin',
        },
        {
            img: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
            name: 'ETH',
        }
    ]
    return (
        <>
            <h1>Crypto charts</h1>
            <div className="items">
                {crypto.map((i, index) => (
                    <div className="item" key={index}>
                        <Link to="/bitcoin">{i.name}</Link>
                        <img src={i.img} alt={i.name} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Lists