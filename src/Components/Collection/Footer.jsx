import React, { useState, useEffect } from 'react';
import { FooterButton, FooterContainer, FooterIcon, FooterSwitchInput, FooterSwitchLabel, FooterToggleSwitch } from '../../Style/ItemFooter.styled';
import { LiaBroomSolid } from "react-icons/lia";

const Footer = () => {
    const [sweep, setSweep] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);

    const handleSweep = () => {
        setSweep(!sweep);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 425);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <FooterContainer>
            <FooterToggleSwitch>
                {!isSmallScreen ? (
                    <div className="switch-container">
                        <FooterSwitchLabel>Sweep</FooterSwitchLabel>
                        <FooterSwitchInput checked={sweep} onClick={handleSweep} />
                    </div>
                ) : (
                    <FooterIcon className="icon-container">
                        <LiaBroomSolid />
                    </FooterIcon>
                )}
                <FooterButton><span>Make collection Offer</span></FooterButton>
            </FooterToggleSwitch>
        </FooterContainer>
    )
}

export default Footer;
