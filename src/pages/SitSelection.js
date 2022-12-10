import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function SitSelection() {
    const [sits, setSits] = useState(undefined)
    const { scheduleId } = useParams()
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${scheduleId}/seats`)
            .then((res) => setSits(res.data))
            .catch(err => err.response.data)
    }, [])
    console.log(sits)
    if (sits === undefined) {
        return (
            <p>Carregando...</p>
        )
    }
    return (

        <Content>
            <p>
                Selecione o assento
            </p>
            <StyledSitSelection>

                <ContainerSeats>
                    {sits.seats.map( seat => 
                        <Seat>

                        </Seat>
                    )}
                </ContainerSeats>
                <ContainerLabel>

                </ContainerLabel>

                <form>
                    <input type="number"/>
                    <input type="text" />
                </form>
            </StyledSitSelection>
        </Content>

    )
}

const StyledSitSelection = styled.div`
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    p {
        margin: 0px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 60px;
        width: 100%;
        height: 110px;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
`
const ContainerSeats = styled.ul`
`
const ContainerLabel = styled.div`
`

const Seat = styled.li`
`