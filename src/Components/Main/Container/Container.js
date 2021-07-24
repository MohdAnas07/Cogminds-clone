import React from 'react'
import './Container.css'
import Card from './Card'
import image from '../../assests/image.png'
import AngryBird1 from '../../assests/angryBird1.png'
import AngryBird2 from '../../assests/angryBird2.png'
import AngryBird3 from '../../assests/angryBird3.png'

const angryBirds = [[AngryBird1, 'Angry Bird-1'], [AngryBird2, 'Holi Maskoid'], [AngryBird3, 'Angry Bird-family'], [AngryBird1, 'Angry Bird-1'], [AngryBird2, 'Holi Maskoid'], [AngryBird2, 'Holi Maskoid'], [AngryBird1, 'Angry Bird-1'], [AngryBird2, 'Holi Maskoid'], [AngryBird3, 'Angry Bird-family']]

const Container = () => {
    return (
        <div className='container'>
            <div className='container-header'>
                <div className="left-container-header">
                    <h2>IMAGE LIBRARY</h2>
                </div>
                <div className="right-container-header">
                    <a href="#">Important guidelines to read before uploading</a>
                    <button htmlFor="upload" className='upload-btn'>
                        <input type="file" id="upload" />
                        <img src={image} alt="" />
                        <p>Upload Your Image</p>
                    </button>
                </div>
            </div>

            <div className="container-img">

                {
                    angryBirds.map((img, i) => (
                        <Card img={img} />
                    ))
                }
            </div>

        </div>
    )
}

export default Container


// <input type="file" />