import React from 'react'
import { CustomButtonContainer } from '../styled-components/custombutton.styles';

function CustomButton({children, ...props}) {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton
