import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../classes/Card'

import { Container, Row } from './structure/StructureComponents'
import { CardComponent } from './CardComponent '

import {props} from 'bluebird'

export function PlayerHand() {
    return (
        <Container display='flex'>
            <Row display='flex'>
                {props.cards.map(card => (
                    <CardComponent 
                        key={card.id}
                        image={card.image}
                        name={card.name}
                    />
                ))}
            </Row>
        </Container>
    )
}

PlayerHand.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)).isRequired
}