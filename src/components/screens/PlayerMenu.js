import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { playerGetCards } from '../../redux/actions'
import { Container, Row } from "../structure/StructureComponents"

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

    function handlePlayerStand() { }

    return (
        <MenuContainer>
            <Container>
                <Row displey='flex' justifyContent='center'>
                    <button onClick={handlePlayerHit}>Hit</button>
                    <button onClick={handlePlayerStand}>Stand</button>
                </Row>
            </Container>
        </MenuContainer>
    )
}