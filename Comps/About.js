import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function About() {
  const [data, setData] = useState();
  const [para1, setPara1] = useState();
  const [para2, setPara2] = useState();
  const [para3, setPara3] = useState();

  useEffect(() => {
    (async function () {
      const res = await axios.get('http://localhost:3000/api/fetchAbout');
      // console.log(res.data.about[0].name);
      setData(res.data.about[0].name);
    })();
  }, []);

  useEffect(() => {
    console.log(data);
    // setPara1(data.slice(0, data?.indexOf('I am a Full')));
    // setPara2(
    //   data.slice(
    //     data?.indexOf('I am a Full'),
    //     data?.indexOf('I Am a Self-taught')
    //   )
    // );
    // setPara3(data.slice(0, data?.indexOf('I am a Full')));
    setPara1(data?.slice(0, data?.indexOf('I am a Full')));
    setPara2(
      data?.slice(
        data?.indexOf('I am a Full'),
        data?.indexOf('I Am a Self-taught')
      )
    );
    setPara3(data?.slice(data?.indexOf('I Am a Self-taught')));
  }, [data]);

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
                {para1}
                <br />
                {para2}
                <br />
                <br />
                {para3}
              </p>
              <a href='/download'>Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
