import React from 'react'

const AboutMe = () => {
  return (
    <div className="About-Me-Text">
      <img
        src={require('../../section-icons/WebDev Icon.png')}
        alt=""
        className="About-Me-Icon"
      />
      It's no secret that I love to learn and push myself. After a few years
      working in operations I knew it was time for a new challenge. I followed
      my intuition and enrolled in a web dev bootcamp. Since then I have been
      enjoying bringing my creative ideas into exisistence.
      <br></br>
      <br></br>I like the outdoors, the indoors, excellent foods, and keeping up
      with each new installment of the Legend of Zelda series. I've lived all
      over the US but the Utah mountains have convinced me to stay put for now.
    </div>
  )
}

export default AboutMe
