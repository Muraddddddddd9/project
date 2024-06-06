import { Navbar } from './index'
import IconSocial from '../assets/Social.png'

const Social = () => {
    return (
        <div className="main-container">
            <div className="info-main-container">
                <Navbar />
            </div>
            <div>
                <img src={IconSocial} alt="" />
            </div>
        </div>
    );
}

export default Social;
