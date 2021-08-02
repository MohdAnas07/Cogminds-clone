import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.css'
import Eye from '../../assests/Eye.png'
import Bin from '../../assests/bin.png'

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {


    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const Card = ({ img }) => {

    AOS.init({
        duration: 600
    })

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [imagesall, setImagesall] = useState({
        image_name: " ",
        image_url: " ",
    });
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const changeHandler = (field, newValue) => {
        setImagesall((prev) => {
            const old = { ...prev };
            old[field] = newValue;
            return old;
        });
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: "absolute",
            width: 450,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            objectFit: "cover",
            borderRadius: "20px",
            outline: "none",
        },
    }));

    const classes = useStyles();

    return (
        <div data-aos="fade-up" className='card-container'>
            <img src={img[0]} alt="" />
            <div className='card' >
                <div onClick={(img) => {
                    handleOpen();
                    changeHandler("image_name", img[1]);
                    changeHandler("image_url", img[0]);
                }}
                    className="icon-hover">

                    <div></div>
                    <img className='eye' src={Eye} alt="" />
                </div>
                <div className="icon-hover">
                    <div></div>
                    <img className='bin' src={Bin} alt="" />
                </div>
            </div>
            <p> {img[1]} </p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">{img[1]}</h2>
                    <p id="simple-modal-description">
                        <img
                            src={img[0]}
                            alt={img[1]}
                            style={{ height: 450, width: 450, borderRadius: "20px" }}
                        />
                    </p>
                </div>
            </Modal>
        </div>
    )
}

export default Card

