import React from 'react'
import Style from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


import logo from '../../../public/assets/logo/logo.svg'
import facebook from '../../../public/assets/logo/facebook.svg'
import instagram from '../../../public/assets/logo/instagram.svg'
import youtube from '../../../public/assets/logo/youtube.svg'

import footerPhoto from '../../../public/assets/footer/footer.png'

const Footer = () => {
  return (
    <div className={Style.container}>
        <Image className={Style.footerPhoto} src={footerPhoto} />
        <div className={Style.textcontainer}>
            <div className={Style.textCTop}>
                <div className={Style.infoContainer}>
                    <a>+36 30 123 4567</a>
                    <a>info@selonsophie.hu</a>
                </div>
                <div className={Style.LogoContainer}>
                <Image src={logo} alt='logo' />
                </div>
            <div className={Style.socialMedia}>
            <Link href='#'><Image src={facebook} alt='logo' /></Link>
            <Link href='#'> <Image src={instagram} alt='logo' /></Link>
            <Link href='#'> <Image src={youtube} alt='logo' /></Link>
            </div>
            </div>
            <div className={Style.textCBottom}>
                <p>2024 © SelonSophie Minden jog fenntartva</p>
            </div>
        </div>

    </div>
  )
}

export default Footer