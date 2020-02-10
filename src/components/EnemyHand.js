import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { Container, Row } from '../components/structure/StructureComponents'
import { CardComponent } from './CardComponent '

const Offset = styled.div`
   margin-left: ${props => props.left};
    margin-top: ${props => props.top};
`

export function EnemyHand(props) {
    return (
        <Container display='flex'>
            <Row display='flex' justifyContent='center'>
                {props.cards.map((card, i) => (
                    <Offset key={card.id} left='-20px' top={`-${8 * i}px`}>
                        <CardComponent
                            image={card.image}
                            name={card.name}
                            backface={i === 1 && !props.showSecondCard}
                        />
                    </Offset>
                ))}
            </Row>
        </Container>
    )
}

EnemyHand.propTypes = {
    showSecondCard: propTypes.bool.isRequired
}