import React, { useState, memo, useEffect } from 'react'
import CSS from './NewOrder.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../assests/angryBird2.png'
import image1 from '../../assests/image.png'
import deleteImg from '../../assests/DeleteImg.png'
import alignH from '../../assests/align1.svg'
import alignV from '../../assests/align2.svg'
import alignL from '../../assests/align3.svg'
import alignR from '../../assests/align4.svg'
import alignU from '../../assests/align5.svg'
import alignD from '../../assests/align6.svg'
import Tshirt from '../../assests/tshirt.svg'
import BTshirt from '../../assests/BackTshirt.png'
import SleevImg from '../../assests/SleeveImg.png'
import Arrow from '../../assests/arrow.svg'

const NewOrders = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 130
        })
    }, [])

    const [front, setFront] = useState(true)
    const [back, setBack] = useState(false)
    const [sleev, setSleev] = useState(false)
    const [print, setPrint] = useState(true)
    const [tColor, setTColor] = useState(null)
    const [tSize, setTSize] = useState(null)

    const [printImg, setPrintImg] = useState(null)
    const [widthSize, setWidthSize] = useState(null)
    const [heightSize, setHeightSize] = useState(null)
    const [topPosition, setTopPosition] = useState(0)
    const [leftPosition, setLeftPosition] = useState(0)

    const [alignmentV, setAlignmentV] = useState(0)
    const [alignmentH, setAlignmentH] = useState(0)


    const [isPrint, setIsPrint] = useState('printed')
    const [printName, setPrintName] = useState('no design')
    const [size, setSize] = useState(null)


    const handleImage = (e) => {
        setPrintImg(URL.createObjectURL(e.target.files[0]))
        setPrintName(e.target.files[0].name)
    }



    return (
        <div data-aos="fade-up" className={CSS.orders}>

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
                                    <a href=''>Show Size Guide</a>
                                </div>

                                <div className={CSS.sizeBox}>
                                    <div style={size === 'S' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box}`}
                                        onClick={() => {
                                            setSize('S')
                                        }} >S</div>
                                    <div style={size === 'M' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box} `}
                                        onClick={() => {
                                            setSize('M')
                                        }} >M</div>
                                    <div style={size === 'L' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box} `}
                                        onClick={() => {
                                            setSize('L')
                                        }} >L</div>
                                    <div style={size === 'XL' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box} `}
                                        onClick={() => {
                                            setSize('XL')
                                        }} >XL</div>
                                    <div style={size === '2XL' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box} `}
                                        onClick={() => {
                                            setSize('2XL')
                                        }} >2XL</div>
                                    <div style={size === '3XL' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box} `}
                                        onClick={() => {
                                            setSize('3XL')
                                        }} >3XL</div>
                                    <div style={size === '4XL' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box} `}
                                        onClick={() => {
                                            setSize('4XL')
                                        }} >4XL</div>
                                    <div style={size === '5XL' ? {
                                        'font-weight': 'bold',
                                        'border': '2px solid'
                                    } : { 'font-weight': '100' }} className={`${CSS.box} `}
                                        onClick={() => {
                                            setSize('5XL')
                                        }} >5XL</div>
                                </div>
                            </div>

                            <p className={CSS.inStock}>In Stock</p>

                            <div className={CSS.TshirtType}>

                                <input type="radio" name="key" value="plain" onClick={(e) => {
                                    setIsPrint(null)
                                }} />
                                <label for="plain">Plain</label>

                                <input type="radio" checked name="key" value="printed" onClick={(e) => {
                                    setIsPrint(e.target.value.toString())
                                }} />
                                <label for="printed">Printed</label>

                            </div>

                            <div className={CSS.DesignImage}>
                                <div className={CSS.uploadedDesign}>
                                    <img src={printImg} alt="" />

                                    <div className={CSS.chooseFile}>
                                        <input type="file" />
                                        <p> {printName} </p>
                                    </div>

                                    <img className={CSS.DeleteImg} src={deleteImg} alt="" onClick={() => { setPrintImg(null) }} />

                                </div>

                                <div className={CSS.designWidth}>
                                    <p>Size</p>
                                    <div className={CSS.size}>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Width</p>
                                            <input type="number" placeholder='2.4' onChange={(e) => {
                                                let width = e.target.value
                                                setWidthSize(width * 50)
                                            }} />
                                            <span>In</span>
                                        </div>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Height</p>
                                            <input type="number" placeholder='3.2'
                                                onChange={(e) => {
                                                    let height = e.target.value
                                                    setHeightSize(height * 50)
                                                }} />
                                            <span>In</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={CSS.designPosition}>
                                    <p>Position</p>
                                    <div className={CSS.size}>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Top</p>
                                            <input type="number" placeholder='0'
                                                onChange={(e) => {
                                                    let position = e.target.value
                                                    setTopPosition(position * 30)
                                                }} />
                                            <span>In</span>
                                        </div>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Left</p>
                                            <input type="number" placeholder='0'
                                                onChange={(e) => {
                                                    let position = e.target.value
                                                    setLeftPosition(position * 30)
                                                }} />
                                            <span>In</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={CSS.designAginment}>
                                    <p>Alignment</p>
                                    <div className={CSS.alignmentImage}>
                                        <img src={alignH} alt="" onClick={() => {
                                            setAlignmentH(alignmentH + 5)
                                        }} />
                                        <img src={alignV} alt="" onClick={() => {
                                            setAlignmentV(alignmentV + 5)
                                        }} />
                                        <img src={alignL} alt="" onClick={() => {
                                            setLeftPosition(leftPosition + 5)
                                        }} />
                                        <img src={alignR} alt="" onClick={() => {
                                            setLeftPosition(leftPosition - 5)
                                        }} />
                                        <img src={alignU} alt="" onClick={() => {
                                            setTopPosition(topPosition + 5)
                                        }} />
                                        <img src={alignD} alt="" onClick={() => {
                                            setTopPosition(topPosition - 5)
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

                                {print && <div className={CSS.print}>
                                    <img className={CSS.printImg}
                                        style={{
                                            width: `${widthSize}px`, height: `${heightSize}px`,
                                            'margin-bottom': `${topPosition}px`,
                                            'margin-right': `${leftPosition}px`,
                                            'padding': `${alignmentV}px ${alignmentH}px`,

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
