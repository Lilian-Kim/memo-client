import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/Button'

const WriteActionButtonsWrapper = styled.div`
width:100%;
text-align:center;
margin-top: 1rem;
margin-bottom: 3rem;
button + button {
    margin-left: 0.5rem
}
`

const StyledButton = styled(Button)`
height: 2.215rem;
font-size:1rem;
& + &{
    margin-left: 0.5rem;
}
`

const WriteActionButtons = ({onCancel, onPublish, isEdit}) => {
    return(
        <WriteActionButtonsWrapper>
            <StyledButton cyan onClick={onPublish}>
                포스트 {isEdit ? '수정' : '등록'}
            </StyledButton>
            <StyledButton onCancel={onCancel}>취소</StyledButton>
        </WriteActionButtonsWrapper>
    )
}

export default WriteActionButtons