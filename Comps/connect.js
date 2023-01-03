import React from 'react';

export default function connect() {
  return (
    <div>
      <section className='contact' id='connect'>
        <div className='max-width'>
          <h2 className='title'>Connect</h2>
          <div className='contact-content'>
            <div className='column left'>
              <div className='text'>Get in Touch</div>
              <p>
                Lets connect!
                <br />
                I am always open to discussing new projects and opportunities.{' '}
                <br /> <br />
                If you want to get in touch with me, or want to discuss about
                personal innovations, or just want to say a hi! I would love to
                hear from you! Just fill in the details and, let the
                conversation begin! I would love to get connected with you
                through the social media! Let’s get in touch on,
              </p>
              <div className='icons'>
                <div className='row'>
                  <i className='fas fa-user'></i>
                  <div className='info'>
                    <div className='head'>Name</div>
                    <div className='sub-title'>Shashank Rai</div>
                  </div>
                </div>
                <div className='row'>
                  <i className='fas fa-map-marker-alt'></i>
                  <div className='info'>
                    <div className='head'>Address</div>
                    <div className='sub-title'>Gwalior (Madhya Pradesh)</div>
                  </div>
                </div>
                <div className='row'>
                  <i className='fas fa-envelope'></i>
                  <div className='info'>
                    <div className='head'>Email</div>
                    <div className='sub-title'>shashank.rai00331@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='column right'>
              <div className='text'>Message me</div>
              <form action='/contact' method='post'>
                <div className='fields'>
                  <div className='field name'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      required
                    />
                  </div>
                  <div className='field email'>
                    <input
                      type='email'
                      placeholder='Email'
                      name='email'
                      required
                    />
                  </div>
                </div>
                <div className='field'>
                  <input
                    type='text'
                    placeholder='Subject'
                    name='subject'
                    required
                  />
                </div>
                <div className='field textarea'>
                  <textarea
                    cols='30'
                    rows='10'
                    placeholder='Message..'
                    name='describe'
                    required
                  ></textarea>
                </div>
                <div className='button-area'>
                  <button type='submit'>Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
