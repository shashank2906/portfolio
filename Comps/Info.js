import React from 'react';

export default function Project() {
  return (
    <div>
      <section className='teams' id='info'>
        <div className='max-width'>
          <h2 className='title'>Info</h2>
          <div className='carousel owl-carousel'>
            <div className='card'>
              <a href='./portfolio.html' target='_blank'>
                <div className='box'>
                  {/* <img src="images/imgx1.jpeg" alt=""> */}
                  <div className='text'>PORTFOLIO</div>
                  <p className='para-text'>
                    Portfolio website made using Html CSS Vanilla JS
                  </p>
                </div>
              </a>
            </div>

            <div className='card'>
              <a href='./coindesk.html' target='_blank'>
                <div className='box'>
                  {/* <img src="images/imgx2.jpeg" alt=""> */}
                  <div className='text'>COIN-DESK</div>
                  <p className='para-text'>
                    Live cryptocurrencies tracking web app
                  </p>
                </div>
              </a>
            </div>

            <div className='card'>
              <a href='./bragcord.html' target='_blank'>
                <div className='box'>
                  {/* <img src="images/imgx3.jpeg" alt=""> */}
                  <div className='text'>BRAG-CORD</div>
                  <p className='para-text'>
                    Chat app made using React JS and React-router{' '}
                  </p>
                </div>
              </a>
            </div>

            <div className='card'>
              <a href='./memories.html' target='_blank'>
                <div className='box'>
                  {/* <img src="images/imgx4.jpeg" alt=""> */}

                  <div className='text'>MEMORIES</div>
                  <p className='para-text'>Social media app made using react</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
