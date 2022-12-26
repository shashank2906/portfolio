import React from 'react';

export default function connect() {
  return (
    <div>
      <section class='contact' id='connect'>
        <div class='max-width'>
          <h2 class='title'>Connect</h2>
          <div class='contact-content'>
            <div class='column left'>
              <div class='text'>Get in Touch</div>
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
              <div class='icons'>
                <div class='row'>
                  <i class='fas fa-user'></i>
                  <div class='info'>
                    <div class='head'>Name</div>
                    <div class='sub-title'>Shashank Rai</div>
                  </div>
                </div>
                <div class='row'>
                  <i class='fas fa-map-marker-alt'></i>
                  <div class='info'>
                    <div class='head'>Address</div>
                    <div class='sub-title'>Gwalior (Madhya Pradesh)</div>
                  </div>
                </div>
                <div class='row'>
                  <i class='fas fa-envelope'></i>
                  <div class='info'>
                    <div class='head'>Email</div>
                    <div class='sub-title'>shashank.rai00331@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div class='column right'>
              <div class='text'>Message me</div>
              <form action='/contact' method='post'>
                <div class='fields'>
                  <div class='field name'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      required
                    />
                  </div>
                  <div class='field email'>
                    <input
                      type='email'
                      placeholder='Email'
                      name='email'
                      required
                    />
                  </div>
                </div>
                <div class='field'>
                  <input
                    type='text'
                    placeholder='Subject'
                    name='subject'
                    required
                  />
                </div>
                <div class='field textarea'>
                  <textarea
                    cols='30'
                    rows='10'
                    placeholder='Message..'
                    name='describe'
                    required
                  ></textarea>
                </div>
                <div class='button-area'>
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
