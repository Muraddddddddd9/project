import React from 'react';
import '../styles/info.css';
import { Navbar } from './index';
import imginfo from '../assets/Info.png';

const Info = () => {
    return (
        <div className="info-container">
            <Navbar />
            <div className="info-info-container">
                <div className='con-info'>
                    <p className='text-info'><p className='text-info-blue'>Цель ООО «ТелеСистем»</p> заключается в автоматизации бизнес-проессов и улучшении качества предоставляемых услуг.</p>
                    <p className='text-info'>
                        <p className='text-info-blue'>Основные задачи:</p>
                        · Оптимизация внутренних процессов. <br />
                        · Улучшение взаимодействия между подразделениями. <br />
                        · Повышение оперативности и точности обработки данных. <br />
                        · Обеспечение безопасности информации. <br />
                        · Улучшение обслуживания клиентов. <br />
                    </p>
                </div>
                <img src={imginfo} alt="img" />
            </div>
        </div>
    );
}

export default Info;
