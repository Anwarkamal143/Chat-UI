import React, { ReactElement } from 'react'
import styled from 'styled-components'

type IChatProps = {
className?:string
}

export const  Chat = (props: IChatProps): ReactElement => {
    const {className} = props
    return (
        <div className={className}>
            chat
        </div>
    )
}

export default  styled(Chat)``;