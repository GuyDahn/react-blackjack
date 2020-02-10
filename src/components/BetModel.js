import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { COLORS } from '../consts/colors'
import {
    Container,
    Row,
    BasicButton
} from "../components/structure/StructureComponents"
import { NotificationContainer } from './structure/ModelComponents'
import { betValues } from '../consts/betValues'

const Model = styled.div`
    display: inline-block;
    padding: 40px 70px;
    background: ${COLORS.SHADOW};
    z-index: 9;
    box-shadow: -8px 8px 0 ${COLORS.SHADOW};
    border: solid 6px ${COLORS.WHITE}
`
const ModelText = styled.div`
    h1,
    h2{
        color: ${COLORS.WHITE};
        margin: 0;
        text-align: center;
        text-shadow: -3px 3px ${COLORS.BLUE};
    }

    h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 28px;
    font-family: Fipps;
    span {
      font-family: Fipps;
      font-size: 18px;
    }
  }
  span {
    margin: 0;
  }
`

const BetOptionAnm = posed.div({
    hoverable: true,
    init: {
        scale: 1
    },
    hover: {
        scale: 1.3
    }
})

const BetOption = styled(BetOptionAnm)`
  display: inline-block;
  margin: 0 15px;
`

export function BetModel() {
    return ( 
        <NotificationContainer>
            <Model>
                <ModelText>
                    <h1>Place bet!</h1>
                </ModelText>
                <Container display='flex' flexDirection='row'>
                    <Row display='flex' justifyContent='space-between'>
                        {betValues.map(value => (
                            <BetOption>
                                <ModelText>
                                    <h2>
                                        <span>$</span>
                                        {value}
                                    </h2>
                                </ModelText>
                            </BetOption>
                        ))}
                    </Row>
                </Container>
                <Container>
                    <Row display='flex' justifyContent='center'>
                        <ModelText>
                            <h1>Current bet:</h1>
                            <h2>
                                <span>$</span>200
                            </h2>
                        </ModelText>
                    </Row>
                    <Row display='flex' justifyContent='center'>
                        <BasicButton>PLACE BET</BasicButton>
                    </Row>
                </Container>
            </Model>
        </NotificationContainer>
    )
}