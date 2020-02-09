import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { playerGetCards, playerStand } from '../../redux/actions'
import { Container, Row } from "../structure/StructureComponents"
import PropTypes from 'prop-types'
import { props } from 'bluebird'

const MenuContainer = styled.div`
    position: fixed;
    bottom: 20px;
    width: 100%;
`

export function PlayerMenu() {
    const dispatch = useDispatch()

    function handlePlayerHit() {
        dispatch(playerGetCards(1))
    }

    function handlePlayerStand() {
        dispatch(playerStand())
    }

    return (
        <MenuContainer>
            <Container>
                <Row displey='flex' justifyContent='center'>
                    <button
                        onClick={handlePlayerHit}
                        disabled={props.standing}>
                        Hit
                    </button>
                    <button
                        onClick={handlePlayerStand}
                        disabled={props.standing}>
                        Stand
                    </button>
                </Row>
            </Container>
        </MenuContainer>
    )
}

PlayerMenu.PropTypes = {
    standing: PropTypes.bool
}