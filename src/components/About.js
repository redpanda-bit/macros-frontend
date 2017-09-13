/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Image} from 'semantic-ui-react'

const About = () => (
  <Container text>
  	<Image src='/MACROS-logo-black.png' size="medium" className="ui centered"/>
    <Header as='h2'>We are Macros.</Header>
    <p>Think myfitnesspal but better.</p>
    <p>We're all about the home cooks. The folks who don't always eat out. And for those who do and want to know what restaurants put on your plate. The ones who wonder what that home-made Indian meal is made of.</p>
    <p>We're here for all of <strong>you</strong>.</p>
    <p>Just upload an image of your food. Let us handle the rest.</p>
    <p>Come back soon.</p>
  </Container>
)

export default About