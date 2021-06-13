// import React, {useState} from 'react'

// const Productpg = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false),
//     [content, setContent] = useState({});
//     const handleOpen = (item) => {
//         setContent(item);
//         setModalIsOpen(true)
//     }
//     return (
//         <div>
//             <h2 style={{textAlign:'center'}}>Description</h2>
//                     <img src={content.image}alt ='modimg' style={{width:'30%', marginLeft:'37%', border:'10px solid #02324f',borderRadius:7}}/>
//                     <h5 >Price:<b>{content.Price}</b></h5>
//                     <h5>Size:{content.size}</h5>
//                     <h5 >Description: {content.content}</h5>
//                     <div className="contact"> 
//                     <p> For further engagements, please click on the Whatsapp Icon ---</p>
//                         <a href='https://wa.me/2347039013505'className='whatsapp_float' rel="noreferrer"target='_blank'><i class='fa fa-whatsapp whatsapp-icon'></i></a>
//                     </div>
//                     <div className='modalbtn1'>
//                     <button onClick= {() => setModalIsOpen(false)}className='modalbtn'>Close</button>
//                     </div>
//         </div>
//     )
// }

// export default Productpg
