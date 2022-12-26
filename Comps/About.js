import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <section className='about' id='about'>
        <div className='max-width'>
          <h2 className='title'>About me</h2>
          <div className='about-content'>
            <div className='column left'>
              <Image src='/me.jpeg' alt='' width={400} height={400} />
            </div>
            <div className='column right'>
              <div className='text'>
                I'm Shashank and I'm a <span className='typing-2'></span>
              </div>
              <p>
                "Innovation optimised solution seeker, excited to be at the
                develpment phase of my career as a software engineer"
                <br />
                I am a Full Stack Web Developer and an undergrad student
                pursuing Bachelor of Technology in Electrical and Electronics
                Engineering @ MITS (gwalior)
                <br />
                <br />I Am a Self-taught programmer capable of mastering new
                technologies, seeking an opportunity in an esteemed organization
                to utilize my skills to build products that provide value.
              </p>
              <a href='/download'>Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
