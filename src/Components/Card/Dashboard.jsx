import React from 'react'
import PhotoCard from './PhotoCard'
import RankCollection from '../Table/Rank&Collection'
import NoteableCollection from './Noteablecollection'

const Dashboard = ({settings, photoCardRef, bgColor}) => {
  return (
    <div>
        <PhotoCard settings={settings} ref={photoCardRef} bgColor={bgColor}/>
        <RankCollection/>
        <NoteableCollection settings={settings}/>

    </div>
  )
}

export default Dashboard