import { action, storiesOf } from '@kadira/storybook';
import React from 'react';

storiesOf('buttons', module)
    .add('default', () => (
        <button onClick={action('buttonClicked')}>
            click me
        </button>
));
