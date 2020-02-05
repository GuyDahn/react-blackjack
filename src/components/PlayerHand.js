import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Card } from '../classes/Card'
import { CardComponent } from './CardComponent '
import { Container, Row } from './structure/StructureComponents'

const Offset = styled.div`
    margin-left: ${props => props.left};
    margin-top: ${props => props.top};
    transition: all 0.3s;
`


export function PlayerHand(props) {
    return (
        <Container display='flex'>
            <Row display='flex' justifyContent='center'>
                {props.cards.map((card, i) => (
                    <Offset
                        key={card.id}
                        left='-15px'
                        top={`-${15 * i}px`} >
                        <CardComponent
                            image={card.image}
                            name={card.name}
                        />
                    </Offset>
                ))}
            </Row>
        </Container>
    )
}

PlayerHand.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)).isRequired
}