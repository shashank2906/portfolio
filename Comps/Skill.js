import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Skill() {

  const [skill, setSkill] = useState()
  useEffect(()=>{
    axios.get('/api/fetchSkill')
    .then((res)=>{
      // console.log(res.data)
      setSkill(res.data.skill[0].name);
      console.log(skill);
    })

  },[])








  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  return (
    <div>
      <section className='skills' id='skills'>
        <div className='max-width'>
          <h2 className='title'>Skills</h2>
          <div className='skills-content'>
            <div className='column left'>
              <div className='text'>My skills & experiences.</div>
              <p>
                {' '}
                In the developmental stage of my carrier, I am working on
                improving myself as a full-stack developer. I create responsive
                websites through efficient practices such as, To know more about
                my skills and experience, you can visit my LinkedIn or, just
                make a quick call!
                <span id='dots'>...</span>
                <span id='more'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                  egestas vitae scel
                </span>
              </p>

              <button onClick={myFunction} id='myBtn'>
                <a>Read more</a>
              </button>
            </div>
            <div className='column right'>
              <div className='bars'>
                <div className='info'>
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className='line html'></div>
              </div>
              <div className='bars'>
                <div className='info'>
                  <span>CSS</span>
                  <span>60%</span>
                </div>
                <div className='line css'></div>
              </div>
              <div className='bars'>
                <div className='info'>
                  <span>Bootstrap</span>
                  <span>70%</span>
                </div>
                <div className='line bootstrap'></div>
              </div>
              <div className='bars'>
                <div className='info'>
                  <span>JavaScript</span>
                  <span>50%</span>
                </div>
                <div className='line js'></div>
              </div>
              <div className='bars'>
                <div className='info'>
                  <span>J-Query</span>
                  <span>60%</span>
                </div>
                <div className='line jquery'></div>
              </div>
              <div className='bars'>
                <div className='info'>
                  <span>React</span>
                  <span>50%</span>
                </div>
                <div className='line react'></div>
              </div>
              <div className='bars'>
                <div className='info'>
                  <span>MySQL</span>
                  <span>60%</span>
                </div>
                <div className='line mysql'></div>
              </div>
              <div className='bars'>
                <div className='info'>
                  <span>Node JS</span>
                  <span>60%</span>
                </div>
                <div className='line node'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
