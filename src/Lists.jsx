import React from 'react'
import { Link } from 'react-router-dom'

const Lists = () => {
    const library = [
        {
            img: 'https://asset.brandfetch.io/idFdo8ulhr/idzj34qGQm.png',
            name: 'Chart.js',
            route:'chartjs'
        },
        {
            img: 'https://cdn-b.saashub.com/images/app/service_logos/53/7f7b1c66652f/large.png?1707294068',
            name: 'Lightweight',
            route:'lightweight'
        }
    ]
    return (
        <>
            <h1>Crypto charts</h1>
            <div className="items">
                {library.map((i, index) => (
                    <div className="item" key={index}>
                        <Link to={`/${i.route}`}>{i.name}</Link>
                        <img src={i.img} alt={i.name} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Lists