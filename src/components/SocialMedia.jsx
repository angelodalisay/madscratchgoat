import React from 'react';
import '../css/SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia() {
    library.add(fab); // Only add the 'fab' (brands) icons

    return (
        <div className="social-media-container">
            <h2>Social Media</h2>
            <div className="social-media-icons">
                <div className="social-media-section">
                    <p className="title">Connect with us</p>
                    <div className="icon-container">
                        <a href="https://www.instagram.com/madscratchgoat/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/madscratchgoat/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                        </a>
                        <a href="https://twitter.com/madscratchgoat" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                        </a>
                        <a href="https://www.tiktok.com/@madscratchgoat" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'tiktok']} size="2x" />
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
