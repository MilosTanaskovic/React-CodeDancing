import React from 'react';
import { BsTwitter, BsInstagram,  } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/milos-tanaskovic-619742130/" target="_blank">
                    <FaLinkedinIn />
                </a>
            </div>
          <div>
            <a href="https://twitter.com/CodeDancing" target="_blank">
                <BsTwitter />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/codedancingstudio/" target="_blank">
                <FaFacebookF />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/codedancingstudio/" target="_blank">
                <BsInstagram />
            </a>
          </div>
        </div>
    )
}

export default SocialMedia
