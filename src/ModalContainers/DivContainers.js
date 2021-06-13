import React, {useState}from 'react'
import {Divdatas} from './DicContainerdata'
import './DivContainers.css';
import Grid from '@material-ui/core/Grid'
import Modal from 'react-modal'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from "react-router-dom";
import  Container2 from '../Components/Container2';

Modal.setAppElement('#root')
const DivContainers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false),
    [content, setContent] = useState({});
    const handleOpen = (item) => {
        setContent(item);
        setModalIsOpen(true)
    }
    return (
        <Container2 >
            <Modal isOpen={modalIsOpen}
                 ShouldCloseOnOverlayClick={false}
                 style={{
                     overlay:{
                         backgroundColor:'grey',
                         padding:50,
                         width:'70%',
                         height:'70%',
                          margin:'auto'
                     },
                     content:{
                         color:'black',
                         alignItems: "center",
                        
                     }
                 }}
                 >
                    <h2 style={{textAlign:'center'}}>Description</h2>
                    <img src={content.image}alt ='modimg' style={{width:'30%', marginLeft:'37%', border:'10px solid #02324f',borderRadius:7}}/>
                    <h5 >Price:<b>{content.Price}</b></h5>
                    <h5>Size:{content.size}</h5>
                    <h5 >Description: {content.content}</h5>
                    <p> Please click on <em><q>place order</q></em> below to finalize order.</p>
                    <a href='https://form.jotform.com/211635642347051' target="_blank">Place Order</a>
                    <div className="contact"> 
                    <p>To chat with an agent, plase click on the Whatsapp Icon</p>
                        <a href='https://wa.me/2347039013505'className='whatsapp_float' rel="noreferrer"target='_blank'><i class='fa fa-whatsapp whatsapp-icon'></i></a>
                    </div>
                    <div className='modalbtn1'>
                    <button onClick={() => setModalIsOpen(false)} className='modalbtn'>Close</button>
                    </div>
                 </Modal>
            {/* <div className="path">
            <ArrowBackIcon className="icon"/>
            <p>
            <NavLink to="/" className="navigation">Back</NavLink></p>
            </div> */}
            <Grid container spacing={5} className="gridcont">
            {Divdatas && Divdatas.map((box,index) =>
            <Grid item xs={12} sm={6} md={3}>
            <div className="containers">
                <img src={box.image} alt='images' style={{width:250, height:170}}/>
                <button onClick ={() => handleOpen(box)} className='divbutton'>{box.title}</button>
            </div>
            </Grid>
            )}
            </Grid>
        </Container2>
    )
}

export default DivContainers
