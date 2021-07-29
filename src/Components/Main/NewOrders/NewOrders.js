import React, { useState } from 'react'
import CSS from './NewOrder.module.css'
// import image from "../../assest/angryBird1.png"
import image from '../../assests/angryBird2.png'
import image1 from '../../assests/image.png'
import deleteImg from '../../assests/DeleteImg.png'
import align1 from '../../assests/align1.svg'
import align2 from '../../assests/align2.svg'
import align3 from '../../assests/align3.svg'
import align4 from '../../assests/align4.svg'
import align5 from '../../assests/align5.svg'
import align6 from '../../assests/align6.svg'
import Tshirt from '../../assests/tshirt.svg'
import BTshirt from '../../assests/BackTshirt.png'
import SleevImg from '../../assests/SleeveImg.png'
import Arrow from '../../assests/arrow.svg'

const NewOrders = () => {
    const [front, setFront] = useState(true)
    const [back, setBack] = useState(false)
    const [sleev, setSleev] = useState(false)
    const [print, setPrint] = useState(true)
    const [tColor, setTColor] = useState({ 'background-color': 'white' })
    const [tSize, setTSize] = useState({ width: '450px', height: '500px' })

    const [printImg, setPrintImg] = useState(null)

    const [widthsize, setWidthSize] = useState(null)
    const [heightSize, setHeightSize] = useState(null)
    const [topPosition, setTopPosition] = useState(null)
    const [leftPosition, setLeftPosition] = useState(null)

    const [isPrint, setIsPrint] = useState(null)

    // Alignments State 

    const handleImage = (e) => {
        setPrintImg(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className={CSS.orders}>

            <div className={CSS.ordersContainer}>
                <div className={CSS.uperBorder}>
                    <span>Mockup</span>
                </div>

                <div className={CSS.container}>
                    <div className={CSS.leftRIght}>
                        <div className={CSS.containerLeft}>
                            <p>Men’s Clothing</p>
                            <h2><span>Half Sleeve</span> Round Neck T-Shirt</h2>
                            <span>Maximum print area (W x H) - 15.6 in x 19.6 in</span>

                            <div className={CSS.colorDiv}>
                                <p >colors:</p>
                                <div className={CSS.colorBox}>
                                    <div className={`${CSS.box} ${CSS.boxBlack}`} onClick={() => {
                                        setTColor({ 'background-color': 'black' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxRed}`} onClick={() => {
                                        setTColor({ 'background-color': 'red' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxGreen}`} onClick={() => {
                                        setTColor({ 'background-color': 'green' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxBlue}`} onClick={() => {
                                        setTColor({ 'background-color': 'blue' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxYellow}`} onClick={(e) => {
                                        setTColor({ 'background-color': 'yellow' })
                                    }} ></div>

                                    <div className={`${CSS.box} ${CSS.boxOrange}`} onClick={() => {
                                        setTColor({ 'background-color': 'orangered' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxPink}`} onClick={() => {
                                        setTColor({ 'background-color': 'pink' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxSkyBlue}`} onClick={() => {
                                        setTColor({ 'background-color': 'rgb(0, 175, 245)' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxDarkBlue}`} onClick={() => {
                                        setTColor({ 'background-color': 'rgb(0, 0, 39)' })
                                    }}></div>

                                    <div className={`${CSS.box} ${CSS.boxDarkGray}`} onClick={() => {
                                        setTColor({ 'background-color': 'rgb(87, 87, 87)' })
                                    }}></div>

                                </div>
                            </div>

                            <div className={CSS.sizeDiv}>
                                <div className={CSS.sizeInnerDiv}>
                                    <p>Size:</p>
                                    <a href='#'>Show Size Guide</a>
                                </div>
                                <div className={CSS.sizeBox}>
                                    <div className={`${CSS.box}`}
                                        onClick={() => {
                                            setTSize({ width: '250px', height: '300px' })
                                        }}>S</div>
                                    <div className={`${CSS.box} `}
                                        onClick={() => {
                                            setTSize({ width: '280px', height: '320px' })
                                        }}>L</div>

                                    <div className={`${CSS.box} `}
                                        onClick={() => {
                                            setTSize({ width: '300px', height: '350px' })
                                        }}>M</div>

                                    <div className={`${CSS.box} `}
                                        onClick={() => {
                                            setTSize({ width: '320px', height: '380px' })
                                        }}>XL</div>

                                    <div className={`${CSS.box} `}
                                        onClick={() => {
                                            setTSize({ width: '340px', height: '400px' })
                                        }}>2XL</div>

                                    <div className={`${CSS.box} `}
                                        onClick={() => {
                                            setTSize({ width: '380px', height: '420px' })
                                        }}>3XL</div>

                                    <div className={`${CSS.box} `}
                                        onClick={() => {
                                            setTSize({ width: '410px', height: '460px' })
                                        }}>4XL</div>

                                    <div className={`${CSS.box} `}
                                        onClick={() => {
                                            setTSize({ width: '450px', height: '500px' })
                                        }}>5XL</div>
                                </div>
                            </div>

                            <p className={CSS.inStock}>In Stock</p>

                            <div className={CSS.TshirtType}>

                                <input type="radio" checked name="key" value="plain" onChange={(e) => {
                                    setIsPrint(e.target.value.toString())
                                }} />
                                <label for="plain">Plain</label>

                                <input type="radio" name="key" value="printed" onChange={(e) => {
                                    setIsPrint(e.target.value.toString())
                                }} />
                                <label for="printed">Printed</label>

                            </div>

                            <div className={CSS.DesignImage}>
                                <div className={CSS.uploadedDesign}>
                                    <img src={printImg} alt="" />

                                    <div className={CSS.chooseFile}>
                                        <input type="file" />
                                        <p>Upload Design</p>
                                    </div>

                                    <img className={CSS.DeleteImg} src={deleteImg} alt="" onClick={() => { setPrintImg(null) }} />

                                </div>

                                <div className={CSS.designWidth}>
                                    <p>Size</p>
                                    <div className={CSS.size}>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Width</p>
                                            <input type="text" placeholder='15.7' onChange={(e) => {
                                                let width = e.target.value
                                                setWidthSize({ width: `${width}px` })
                                            }} />
                                            <span>Px</span>
                                        </div>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Height</p>
                                            <input type="text" placeholder='15.7' onChange={(e) => {
                                                let height = e.target.value
                                                setHeightSize({ height: `${height}px` })
                                            }} />
                                            <span>Px</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={CSS.designPosition}>
                                    <p>Position</p>
                                    <div className={CSS.size}>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Top</p>
                                            <input type="text" placeholder='15.7' onChange={(e) => {
                                                let position = e.target.value
                                                setTopPosition({ 'margin-bottom': `${position}px` })
                                            }} />
                                            <span>Px</span>
                                        </div>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Left</p>
                                            <input type="text" placeholder='15.7' onChange={(e) => {
                                                let position = e.target.value
                                                setLeftPosition({ 'margin-right': `${position}px` })

                                            }} />
                                            <span>Px</span>
                                        </div>
                                    </div>
                                </div>


                                <div className={CSS.designAginment}>
                                    <p>Alignment</p>
                                    <div className={CSS.alignmentImage}>
                                        <img src={align1} alt="" />
                                        <img src={align2} alt="" />
                                        <img src={align3} alt="" />
                                        <img src={align4} alt="" />
                                        <img src={align5} alt="" onClick={() => {

                                            // let count = count + 1
                                            setTopPosition()

                                        }} />
                                        <img src={align6} alt="" onClick={() => {
                                            setTopPosition(topPosition - 1)
                                        }} />

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={CSS.containerRIght} >
                            <div className={CSS.shirtPosition}>
                                <p style={front ? { color: '#fc6101' } : {}} onClick={() => {
                                    setFront(true)
                                    setBack(false)
                                    setSleev(false)
                                    setPrint(true)
                                }}>FRONT</p>
                                <p style={back ? { color: '#fc6101' } : {}} onClick={() => {
                                    setFront(false)
                                    setBack(true)
                                    setSleev(false)
                                    setPrint(false)
                                }}>BACK</p>
                                <p style={sleev ? { color: '#fc6101' } : {}} onClick={() => {
                                    setFront(false)
                                    setBack(false)
                                    setSleev(true)
                                    setPrint(false)
                                }}>SLEEVE</p>
                            </div>

                            <div className={CSS.tshirtImage}>

                                {front && <img style={{ ...tColor, ...tSize }} src={Tshirt} alt="" />}

                                {back && <img style={{ ...tColor, ...tSize }} src={BTshirt} alt="" />}

                                {sleev && <img style={{ ...tColor, ...tSize }} src={SleevImg} alt="" />}

                                {print && <div className={CSS.print}><img className={CSS.printImg}
                                    style={{
                                        ...widthsize, ...heightSize,
                                        ...topPosition, ...leftPosition
                                    }}
                                    src={printImg} alt="" /></div>}
                            </div>
                        </div>
                    </div>
                    <div className={CSS.buttons}>
                        <div className={CSS.uploads}>
                            {
                                isPrint === 'printed' ? <button htmlFor="upload" className={CSS.uploadBtn}>
                                    <input type="file" id="upload" onChange={(e) => handleImage(e)} />

                                    <img src={image1} alt="" />
                                    <p>Upload Your Image</p>
                                </button> : <div></div>}
                        </div>
                        <div className={CSS.proceedBack}>
                            <button className={CSS.btnBack}>
                                <img src={Arrow} alt="" />
                                <p>Back</p>
                            </button>
                            <button className={CSS.btnProceed}>Proceed</button>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
}


export default NewOrders
