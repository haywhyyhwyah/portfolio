import React from 'react'

const Contacts = () => {
    return (
        <div className='contacts'>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Contact Me</h1>

            <div className='contacts-child'>
                <div className='mail-location'>
                    <div className='mail'>
                        <div><img src="mail.svg" alt="" /></div>
                        <div>
                            <h4 style={{ color: 'white', fontSize: '20px' }}>Need me?</h4>
                            <p style={{ color: 'grey' }}>I am here to help you.</p>
                            <p style={{ color: '#7b22ce', fontSize: '16px' }}>Email me at <br /> ayomideisrael623@gmail.com</p>
                        </div>
                    </div>

                    <div className='location'>
                        <div>
                            <img src="location.svg" alt="" />
                        </div>

                        <div>
                            <h4 style={{ color: 'white' }}>Nigeria</h4>
                            <p style={{ color: '#7b22ce' }}>Serving clients Worldwide</p>
                        </div>
                    </div>
                </div>


                <form action="">
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your email' />
                    <input type="text" placeholder='Subject' />
                    <textarea name="" id="" placeholder='Your Message'></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contacts