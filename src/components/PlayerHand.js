import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from './structure/StructureComponents'
import { Card } from '../classes/Card'
import { CardComponent  } from './CardComponent '

export function PlayerHand() {
    return (
        <Container display='flex'>
            <Row display='flex'>
                {props.cards.map(card => (
                    <CardComponent 
                        key={card.id}
                        image={card.image}
                        name={card.id}
                    />
                ))}
            </Row>
        </Container>
    )
}

PlayerHand.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)).isRequired
}