import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import './style.css';

function HelloWorldApp() {
    // YOUR CODE GOES HERE
    return <div>Hello world 🚀</div>;
}

initializeBlock(() => <HelloWorldApp />);
