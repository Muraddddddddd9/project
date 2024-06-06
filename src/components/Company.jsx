import React from 'react';
import '../styles/company.css';
import { Navbar } from './index';
import MTC from '../assets/MTC.png'
import Rost from '../assets/Rost.png'
import Beel from '../assets/Beel.png'
import Tele from '../assets/Tele.png'
import Chart from '../assets/chart.png'

const Company = () => {
    return (
        <div className="company-container">
            <Navbar />
            <div className="company-info-container">
                <div className='con-company'>
                    <p className='text-company'>
                        <p className='text-company-blue'>Мы работаем </p>
                        со множество различных компаний. Основные это: МТС, Ростелеком, Билайн, Теле2 и многие другие</p>
                    <div>
                        <img style = {{margin: "10px"}}src={MTC} alt="img" />
                        <img style = {{margin: "10px"}}src={Rost} alt="img" />
                        <img style = {{margin: "10px"}}src={Beel} alt="img" />
                        <img style = {{margin: "10px"}}src={Tele} alt="img" />
                    </div>
                        <img src={Chart} alt="img" />
                </div>
            </div>
        </div>
    );
}

export default Company;