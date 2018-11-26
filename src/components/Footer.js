import React from 'react';

const Footer = (props) => (
    <div className='footer'>
        <div className='container'>
            <p className='footer__copyright'>{props.title}</p>
            <p>{props.year}</p>
        </div>
    </div>
);

Footer.defaultProps = {
    title: "© A Nico Magaña Production",
    year: "Established 2018"
};

export default Footer;