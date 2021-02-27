import React from 'react'

import { Loader, Dimmer } from 'semantic-ui-react';
// fix Dimmer import from semantic-ui

const Spinner = () => (
    <Dimmer active>
        <Loader size='huge' content={"Preparing Chat..."}/>
    </Dimmer>
)

export default Spinner;