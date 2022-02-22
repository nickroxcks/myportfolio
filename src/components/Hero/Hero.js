import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import PropTypes from 'prop-types'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
            Hi, <br />
            I'm Nicholas Serrano<br />
        </SectionTitle>
        <SectionText>
          "The only way to do great work, is to love what you do"
        </SectionText>
        <Button onclick={() => window.location = "https://google.com"}>Contact Me</Button>
    </LeftSection>
  </Section> 
);

export default Hero;