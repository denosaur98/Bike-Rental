import React from 'react';
import css from './Footer.module.css'

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.link_container}>
                <p>By&nbsp;</p><a href="https://github.com/denosaur98" rel="noreferrer" target="_blank" className={css.link}>denosaur98</a>
            </div>
        </footer>
    )
}

export default Footer;