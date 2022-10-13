import React, { useState } from 'react'
import Action from './Category/Action/Action'
import MyCreated from './Category/Mycreated/MyCreated'
import Puzzle from './Category/Puzzle/Puzzle'
import Racing from './Category/Racing/Racing'
import Sports from './Category/Sports/Sports'
import './MyGames.css'

const MyGames = () => {

  const [slide, updateSlide] = useState(0)
  const [show, updateShow] = useState('hide')
  const [showButton, updateShowButton] = useState('hide')
  const [playURL, updateURL] = useState('')

  function showFrame(url) {
    updateShow('screen')
    updateURL(url)
    updateShowButton('button-74')
  }

  return (
    <>
      <div id='head'>WELCOME TO MY REACT-GAMING-CAROUSEL</div>
      <div className='appCont'>
        <div className={show} >
          <button className={showButton} onClick={() => updateURL(null) || updateShow('hide') || updateShowButton('hide')}  >back</button>
          <iframe title='play games' src={playURL} id="ifm" frameBorder="0"> </iframe>
        </div>

        <div id='carousel'>
          <div style={{ transform: `translateX(${slide}00%)` }} className='pages' id='carouselPage1'><MyCreated showFrame={showFrame} /></div>
          <div style={{ transform: `translateX(${slide}00%)` }} className='pages' id='carouselPage2'><Action showFrame={showFrame} /></div>
          <div style={{ transform: `translateX(${slide}00%)` }} className='pages' id='carouselPage3'><Racing showFrame={showFrame} /></div>
          <div style={{ transform: `translateX(${slide}00%)` }} className='pages' id='carouselPage4'> <Sports showFrame={showFrame} /></div>
          <div style={{ transform: `translateX(${slide}00%)` }} className='pages' id='carouselPage5'> <Puzzle showFrame={showFrame} /></div>
        </div>

        <div onClick={() => slide < -3 ? null : updateSlide(slide - 1)} className='carouselNav' id='rightBtn'>⪢</div>
        <div onClick={() => slide === 0 ? null : updateSlide(slide + 1)} className='carouselNav' id='leftBtn'>⪡</div>
        <div id='frontprof' onClick={() => window.location.href = "https://github.com/Aman-Dhyani"} title='Visit My Github' className='prof'></div>
        <div id='runningprof' className='prof'></div>
      </div>
    </>
  )
}

export default React.memo(MyGames)
