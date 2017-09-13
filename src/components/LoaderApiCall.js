import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderApiCall = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderApiCall
