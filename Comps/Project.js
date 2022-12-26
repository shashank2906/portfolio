import React from 'react';

export default function Work() {
  return (
    <div>
      <section className='services' id='project'>
        <div className='max-width'>
          <h2 className='title'>Projects</h2>
          <div className='serv-content'>
            <div className='card'>
              <div className='box'>
                <a href='./portfolio.html'>
                  <i className='fas fa-portrait'></i>
                  <div className='text'>PORTFOLIO</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem quia sunt, quasi quo illo enim.
                  </p>
                </a>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <a href='./coindesk.html'>
                  <i className='fas fa-chart-line'></i>
                  <div className='text'>COIN-DESK</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem quia sunt, quasi quo illo enim.
                  </p>
                </a>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <a href='./bragcord.html'>
                  <i className='fas fa-comment-dots'></i>
                  <div className='text'>BRAG-CORD</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem quia sunt, quasi quo illo enim.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
