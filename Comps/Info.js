import React from 'react';

export default function Project() {
  return (
    <div>
      <section class='teams' id='info'>
        <div class='max-width'>
          <h2 class='title'>Info</h2>
          <div class='carousel owl-carousel'>
            <div class='card'>
              <a href='./portfolio.html' target='_blank'>
                <div class='box'>
                  {/* <img src="images/imgx1.jpeg" alt=""> */}
                  <div class='text'>PORTFOLIO</div>
                  <p class='para-text'>
                    Portfolio website made using Html CSS Vanilla JS
                  </p>
                </div>
              </a>
            </div>

            <div class='card'>
              <a href='./coindesk.html' target='_blank'>
                <div class='box'>
                  {/* <img src="images/imgx2.jpeg" alt=""> */}
                  <div class='text'>COIN-DESK</div>
                  <p class='para-text'>
                    Live cryptocurrencies tracking web app
                  </p>
                </div>
              </a>
            </div>

            <div class='card'>
              <a href='./bragcord.html' target='_blank'>
                <div class='box'>
                  {/* <img src="images/imgx3.jpeg" alt=""> */}
                  <div class='text'>BRAG-CORD</div>
                  <p class='para-text'>
                    Chat app made using React JS and React-router{' '}
                  </p>
                </div>
              </a>
            </div>

            <div class='card'>
              <a href='./memories.html' target='_blank'>
                <div class='box'>
                  {/* <img src="images/imgx4.jpeg" alt=""> */}

                  <div class='text'>MEMORIES</div>
                  <p class='para-text'>Social media app made using react</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
