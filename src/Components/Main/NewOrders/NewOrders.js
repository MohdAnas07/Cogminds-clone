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
import SleevImg from '../../assests/SleevImg.png'
import Arrow from '../../assests/arrow.svg'

const NewOrders = () => {
    const [front, setFront] = useState(true)
    const [back, setBack] = useState(false)
    const [sleev, setSleev] = useState(false)
    const [print, setPrint] = useState(true)


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
                                    <div className={`${CSS.box} ${CSS.boxBlack}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxRed}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxGreen}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxBlue}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxYellow}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxOrange}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxPink}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxSkyBlue}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxDarkBlue}`}></div>
                                    <div className={`${CSS.box} ${CSS.boxDarkGray}`}></div>
                                </div>
                            </div>

                            <div className={CSS.sizeDiv}>
                                <div className={CSS.sizeInnerDiv}>
                                    <p>Size:</p>
                                    <a href='#'>Show Size Guide</a>
                                </div>
                                <div className={CSS.sizeBox}>
                                    <div className={`${CSS.box}`}>S</div>
                                    <div className={`${CSS.box} `}>L</div>
                                    <div className={`${CSS.box} `}>M</div>
                                    <div className={`${CSS.box} `}>XL</div>
                                    <div className={`${CSS.box} `}>2XL</div>
                                    <div className={`${CSS.box} `}>3XL</div>
                                    <div className={`${CSS.box} `}>4XL</div>
                                    <div className={`${CSS.box} `}>5XL</div>
                                </div>
                            </div>

                            <p className={CSS.inStock}>In Stock</p>

                            <div className={CSS.TshirtType}>
                                <input type="radio" checked name="key" value="plain" />
                                <label for="html">Plain</label>
                                <input type="radio" name="key" value="print" />
                                <label for="css">Printed</label>
                            </div>

                            <div className={CSS.DesignImage}>
                                <div className={CSS.uploadedDesign}>
                                    <img src={image} alt="" />
                                    <div className={CSS.chooseFile}>
                                        <input type="file" />
                                        <p>Upload Design</p>
                                    </div>
                                    <img className={CSS.DeleteImg} src={deleteImg} alt="" />
                                </div>
                                <div className={CSS.designWidth}>
                                    <p>Size</p>
                                    <div className={CSS.size}>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Width</p>
                                            <input type="text" placeholder='15.7' />
                                            <span>In</span>
                                        </div>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Height</p>
                                            <input type="text" placeholder='15.7' />
                                            <span>In</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={CSS.designPosition}>
                                    <p>Position</p>
                                    <div className={CSS.size}>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Top</p>
                                            <input type="text" placeholder='15.7' />
                                            <span>In</span>
                                        </div>
                                        <div className={CSS.sizeInputBox}>
                                            <p>Left</p>
                                            <input type="text" placeholder='15.7' />
                                            <span>In</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={CSS.designAginment}>
                                    <p>Position</p>
                                    <div className={CSS.alignmentImage}>
                                        <img src={align1} alt="" />
                                        <img src={align2} alt="" />
                                        <img src={align3} alt="" />
                                        <img src={align4} alt="" />
                                        <img src={align5} alt="" />
                                        <img src={align6} alt="" />
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

                                {front && <img src={Tshirt} alt="" />}
                                {back && <img src={BTshirt} alt="" />}
                                {sleev && <img src={SleevImg} alt="" />}
                                {print && <div className={CSS.print}><span>Print your customs design</span></div>}
                            </div>

                        </div>
                    </div>
                    <div className={CSS.buttons}>
                        <div className={CSS.uploads}>
                            <button htmlFor="upload" className={CSS.uploadBtn}>
                                <input type="file" id="upload" />
                                <img src={image1} alt="" />
                                <p>Upload Your Image</p>
                            </button>
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
