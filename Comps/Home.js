import React from 'react';

export default function Home() {
  return (
    <div>
      <section className='home' id='home'>
        <div className='max-width'>
          <div className='home-content'>
            <div className='text-1'>Hello, I Am</div>
            <div className='text-2'>Shashank</div>
            <div className='text-3'>
              And I'm a <span className='typing'></span>
            </div>
            <div className='connect-btn'>
              <a href='/#contact'>Connect</a>{' '}
            </div>

            <div className='icon-className'>
              <a
                href='https://www.linkedin.com/in/shashank-rai-818935182/'
                target='_blank'
              >
                <i className='fab fa-linkedin icon-con icon-1'></i>
              </a>
              <a href='https://github.com/shashank2906' target='_blank'>
                <i className='fab fa-github icon-con icon-2'></i>
              </a>
              <a
                href='https://www.instagram.com/shashank_2906/'
                target='_blank'
              >
                <i className='fab fa-instagram icon-con icon-3'></i>
              </a>
              <a href='https://twitter.com/2906_shashank' target='_blank'>
                <i className='fab fa-twitter icon-con icon-4'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
