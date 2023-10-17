import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../css/contact.css'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sentEmail, setSentEmail] = useState(false)

    function submit() {
        if (name && email && message) {
            const serviceId = 'service_o7oc90r'
            const templateId = 'template_495qvtm'
            const userId = 'BVkqZR51ALDCg8xNH'
            const templateParams = {
                name,
                email,
                message
            }

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error))

            setName('')
            setEmail('')
            setMessage('')
            setSentEmail(true)
        } else {
            alert ('Please fill in all fields.')
        }
    }

    return (
        <div id='contact'>
            <div className='contact-us'>
                <h1 className='header'>Contact Us</h1>
                <div className='text-input'>
                    <label className='label'>Name</label>
                    <input 
                        type='text'
                        className='name-input'
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='text-input'>
                    <label className='label'>Email</label>
                    <input
                        type='email'
                        className='email-input'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='message'>
                    <label className='label'>Message</label>
                    <textarea 
                        placeholder='Your message here...'
                        className='message-input'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </textarea>
                </div>
                {/* once email form has been completed and validated display Thank you/sent message*/}
                    
                <button className='submit' onClick={submit}>Submit Message</button>

                <span className= {sentEmail ? 'visible' : undefined}>Thank you for your message. We'll be in touch!</span>

            </div>   
        </div>
    )
}
export default Contact 