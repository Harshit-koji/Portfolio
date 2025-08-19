import React, { useState } from 'react';
import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { SBtn } from '../Reusable comp/SBtn';
import "../../Style/contact.scss";
import { viewVariantXM, viewVariantXP } from '../Reusable comp/Variant';

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <>
            <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
                <div className="contact-section"></div>
                <div className="container mb-3 position-relative">
                    {showAlert && (
                        <div className="alert alert-success alert-dismissible fade show mb-4">
                            Message sent successfully! Thank you for reaching out.
                            <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
                        </div>
                    )}

                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-white mb-3">Get In Touch</h2>
                        <p className="lead text-light">Ready to work together? Let's create something amazing.</p>
                    </div>

                    <div className="row g-4 ">
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
                                            <p className="m-0"><b>Email : </b>hello@example.com</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <a href="tel:+15551234567" className="text-decoration-none text-white d-flex align-items-center">
                                        <span className="me-3">📞</span>
                                        <div>
                                            <p className="m-0"><b>Phone : </b>+1 (555) 123-4567</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mb-4">
                                    <div className="text-white d-flex align-items-center">
                                        <span className="me-3">📍</span>
                                        <div>
                                            <p className="m-0"><b>Location : </b>San Francisco, CA</p>
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
                            <form onSubmit={handleSubmit} 
                            name="contact v1" method="post" data-netlify="true"  className="p-4 rounded-4 card skillCardBg bgMainBlue">
                                <input type="hidden" name='form-name' value="contact v1" />
                                <h3 className="h4 text-white mb-4">Send Message</h3>

                                <div className="mb-3">
                                    <label className="form-label text-white">Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-white">Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label text-white">Message</label>
                                    <textarea name="message" className="form-control" rows="5" placeholder="Your message" value={formData.message} onChange={handleChange} required />
                                </div>

                                {/* <SBtn text='Send Message' /> */}
                                <button id="contact-btn" type="submit" className="btn btn-lg w-100 text-white fw-bold">Send Message</button>

                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
            <div className="text-center text-light small copyright-div">
                <div className="copyright-text">  © {new Date().getFullYear()} Priyanshu. All rights reserved.</div>
            </div>
        </>
    );
};

// export default ContactSection;