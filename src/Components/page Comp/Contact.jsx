import  { useEffect, useState } from 'react';
import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { SBtn } from '../Reusable comp/SBtn';
import "../../Style/contact.scss";
import { viewVariantXM, viewVariantXP } from '../Reusable comp/Variant';
import { Headline } from '../Reusable comp/Headline';
import{useForm,ValidationError} from "@formspree/react";

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showAlert, setShowAlert] = useState(false);
    const [state, handleSubmit] = useForm("meoloqgb");
    const [color, setColor] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    // };
    // console.log(formData);
    // useEffect(()=>{
        
    //     if(state.succeeded){
            
    //         setFormData({ name: '', email: '', message: '' })
    //         setShowAlert(true);
    //         setTimeout(() => setShowAlert(false), 3000);
    //       state.succeeded = false ;
    //     }
    // },[state.succeeded]);

    const customSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(e);
        
        if (state.succeeded) {
            setFormData({ name: "", email: "", message: "" });
            setColor(true);
            setTimeout(()=>setColor(false),3000)
            
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  }
};


    return (
        <>
            <section className="  d-flex align-items-center position-relative overflow-hidden ">
                <div className="contact-section"></div>
                <div className="container mb-3 position-relative">
                  

                    <div className="text-center mb-5">
                        {/* <h2 className="display-4 fw-bold text-white mb-3"></h2>
                        <p className="lead text-light">.</p> */}
                        <Headline headingTwo="Get In Touch" para="Ready to work together? Let's create something amazing" />
                    </div>
                    <div className="row g-4  ">

                        <motion.div
                         variants={viewVariantXM}
          initial="hidden"
          // animate="show"
         whileInView="show"
          exit="exit"
          viewport={{amount: 0.5}}

                        className="col-lg-6 ">
                            <div className="p-4 rounded-4 mb-4 card skillCardBg bgMainBlue">
                                <h3 className="h4 text-white mb-4">Contact Info</h3>
                                <div className="mb-3">
                                    <a href="mailto:hello@example.com" className="text-decoration-none text-white d-flex align-items-center">
                                        <span className="me-3">📧</span>
                                        <div>
                                            <p className="m-0"><b>Email : </b>hvermashit@gmail.com</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <a href="tel:+15551234567" className="text-decoration-none text-white d-flex align-items-center">
                                        <span className="me-3">📞</span>
                                        <div>
                                            <p className="m-0"><b>Phone : </b>+91 7011662751</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mb-4">
                                    <div className="text-white d-flex align-items-center">
                                        <span className="me-3">📍</span>
                                        <div>
                                            <p className="m-0"><b>Location : </b> New Delhi ,India </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-white mb-3">Follow Me</h5>
                                    <div className="d-flex gap-3 social-icons">
                                        <a href="" className="text-white text-decoration-none">
                                            <div className="p-1"><FaGithub /></div>
                                        </a>
                                        <a href="" className="text-white text-decoration-none">
                                            <div className="p-1"><FaLinkedinIn /></div>
                                        </a>
                                        <a href="" className="text-white text-decoration-none">
                                            <div className="p-1"><SiLeetcode /></div>
                                        </a>
                                        <a href="" className="text-white text-decoration-none">
                                            <div className="p-1"><FaInstagram /></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                          variants={viewVariantXP}
           initial="hidden"
           whileInView="show"
         
          exit="exit"
          viewport={{ amount: 0.5}}
                        className="col-lg-6 ">
                              {showAlert && (
                        <div className="alert alert-success alert-dismissible fade show mb-4">
                            Message sent successfully! Thank you for reaching out.
                            <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
                        </div>
                    )}
                            <form  onSubmit={customSubmit}
                         noValidate
                            
                       className="p-4 rounded-4 card skillCardBg bgMainBlue " >
                                {/* <input type="hidden" name='form-name' value="contact v1" /> */}
                                <h3 className="h4 text-white mb-4 text-center">Send Message</h3>

                                <div className="mb-3">
                                    <label className="form-label text-white" htmlFor='name'  >Name</label>
                                    <input type="text" id='name' name="name" className="form-control" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                                    <ValidationError prefix='Name' field='name' errors={state.errors}/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-white" htmlFor='email'>Email</label>
                                    <input type="email" name="email" id='email' className="form-control" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                                    <ValidationError prefix='Email' field='email' errors={state.errors}/>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label text-white" htmlFor='message' >Message</label>
                                    <textarea name="message" className="form-control" id='message'  rows="5" placeholder="Your message" value={formData.message} onChange={handleChange} required />
                                    <ValidationError prefix='Message' field='message' errors={state.errors}/>
                                </div>

                                <SBtn text='Send Message ' className="align-self-end  w-100 text-center" type="submit" red={color} />
                                {/* <button id="contact-btn" type="submit" className="btn btn-lg w-100 text-white fw-bold">Send Message</button> */}

                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
            <div className="  text-center text-light small copyright-div rounded-top-4 py-4">
                <div className="copyright-text">  © {new Date().getFullYear()} Harshit. All rights reserved.</div>
            </div>
        </>
    );
};

// export default ContactSection;