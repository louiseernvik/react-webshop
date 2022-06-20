import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterVariant={
  start: {opacity: 1, transition:{duration:1}},
  stop: {opacity: 0}
}

function Footer() {
  return (
    <Wrapper as={motion.footer} animate="start" initial="stop" variants={FooterVariant}>
      <footer className='max-width'></footer>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  height: 150px;
  background-color: rgb(241, 241, 241);
`

export default Footer