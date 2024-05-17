import React from 'react';
import s from './Nav.module.css';
import window from '../images/logo.svg';
import data from '../images/measering.svg';
import calc from '../images//calculation.svg';
import { Link, Route, Routes } from 'react-router-dom';
import Services from '../pages/Services';

const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.wrapper}>
                <img
                    src={window}
                    alt=''
                    className={s.windowImage}
                />
                <span className={s.navItem}>
                    <Link to='/services'>Services</Link>
                </span>
                <span className={s.navItem}>
                    <Link to='/products'>Products</Link>
                </span>
                <span className={s.navItem}>
                    <Link to='/about'>About us</Link>
                </span>
                <span className={s.navItem}>
                    <Link to='/portfolio'>Portfolio</Link>
                </span>
                <span className={s.navItem}>
                    <Link to='/faq'>FAQ</Link>
                </span>
                <span className={s.navItem}>
                    <Link to='/contacts'>Contacts</Link>
                </span>
                <button className={s.btnReq}>
                    <img
                        src={data}
                        alt=''
                    />
                    <span>
                        <Link to='/request'>Make request</Link>
                    </span>
                </button>
                <button className={s.btnCalc}>
                    <img
                        src={calc}
                        alt=''
                    />
                    <span>
                        <Link to='/calculation'>Calculation</Link>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Nav;
