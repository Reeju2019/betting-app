import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './Settings.css'
const Settings = () => {
  return (
    
    <div className='container dashboard_content'>
      <Navbar activeButton={"SETTINGS"} newButton={"SETTINGS"}/>
        <div className='vertical_mid'>
        <div className='set-box'>
            <img className='image' src='http://nice1010.fun/images/home_material/world.svg'/>
            <p className='set-name'>Language</p>
        </div>
        <div className='set-box'>
            <img className='image' src='http://nice1010.fun/images/home_material/settings.svg'/>
            <p className='set-name'>Other</p>
        </div>  
        <div className='set-box'>
            <img className='image' src='http://nice1010.fun/images/home_material/speed-meter.svg'/>
            <p className='set-name'>Other Setting</p>
        </div> 
    </div>
  </div>
  )
}

export default Settings