import React from 'react';
import PropTypes from 'prop-types';

import TextField from './textField';
import Button from './button';
import Dropdown from './dropdown';
import Image from './image';
import Video from './video';

const FormField = (props) => {
    switch (props.type) {
        case 'button':
            return <Button {...props} />;
        case 'dropdown':
            return <Dropdown {...props} />;
        case 'image':
            return <Image {...props} />;
        case 'video':
            return <Video {...props} />;
        case 'text':
        default:
            return <TextField {...props} />;
    }
};

FormField.propTypes = {
    type: PropTypes.string,
};

FormField.defaultProps = {
    type: '',
};

export default FormField;
