import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { playerGetCards, playerStand } from '../../redux/actions'
import propTypes from 'prop-types'
import { props } from 'bluebird'
import {
    Container,
    Row,
    BasicButton
} from "../structure/StructureComponents"


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
                    <BasicButton
                        onClick={handlePlayerHit}
                        disabled={props.enabled}>
                        Hit
                    </BasicButton>
                    <BasicButton
                        onClick={handlePlayerStand}
                        disabled={props.enabled}>
                        Stand
                    </BasicButton>
                </Row>
            </Container>
        </MenuContainer>
    )
}

PlayerMenu.propTypes = {
    enabled: propTypes.bool
}