import React from 'react';
import '../styles/main.css';
import { Navbar } from './index';
import imgMain from '../assets/Image.png'; 

const Main = () => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="info-main-container">
                <div className='con-main'>
                    <p className='title-main'>Телекоммуникационные системы</p>
                    <p className='text-main'>
                        Упорядоченная совокупность методов, правил, протоколов, технических и программных средств в их взаимосвязи и взаимодействии, обеспечивающих передачу электронного сообщения от источника к получателю по сетям электросвязи.
                    </p>
                    <button>GO</button>
                </div>
                <img src={imgMain} alt="img" />
            </div>
        </div>
    );
}

export default Main;
