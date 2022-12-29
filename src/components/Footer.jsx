import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <div className="footerTop">
                Questions? Call <a href='tel:000-800-919-1694'>000-800-919-1694</a>
            </div>
            <div className="footerLinks">
                <ul>
                    <li><a href='/#'>FAQ</a></li>
                    <li><a href='/#'>Help Centre</a></li>
                    <li><a href='/#'>Account</a></li>
                    <li><a href='/#'>Media Centre</a></li>
                    <li><a href='/#'>Investor Relations</a></li>
                    <li><a href='/#'>Jobs</a></li>
                    <li><a href='/#'>Ways to Watch</a></li>
                    <li><a href='/#'>Terms of Use</a></li>
                    <li><a href='/#'>Privacy</a></li>
                    <li><a href='/#'>Cookie Preferences</a></li>
                    <li><a href='/#'>Corporate Information</a></li>
                    <li><a href='/#'>Contact Us</a></li>
                    <li><a href='/#'>Speed Test</a></li>
                    <li><a href='/#'>Legal Notices</a></li>
                    <li><a href='/#'>Only on Netflix</a></li>
                </ul>
            </div>
            <div>
                <button className="footerLanguage">
                    <Icon icon="ph:globe-bold"/>
                    English
                    <Icon icon="gridicons:dropdown" width="24" height="24"/>
                </button>
            </div>
            <div className="footerBottom">
                Netflix India
            </div>
        </div>
    </div>
  )
}

export default Footer