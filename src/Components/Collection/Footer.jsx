import React, { useState } from 'react'
import { FooterButton, FooterContainer, FooterSwitchInput, FooterSwitchLabel, FooterToggleSwitch } from '../../Style/ItemFooter.styled'

const Footer = () => {
    const [sweep, setSweep] = useState(false)
    const handleSweep = () => {
        setSweep(!sweep)
    }
  return (
   <FooterContainer>
    <FooterToggleSwitch>
        <FooterSwitchLabel>Sweep</FooterSwitchLabel>
        <FooterSwitchInput checked={sweep} onClick={handleSweep}/>
        <FooterButton><span>Make collection Offer</span></FooterButton>
    </FooterToggleSwitch>
   </FooterContainer>
  )
}

export default Footer