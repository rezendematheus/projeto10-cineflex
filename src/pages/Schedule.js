import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"



export default function Schedule() {
    let { movieId } = useParams()
    const [arrSchedule, setArrSchedule] = useState(undefined)
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`)
            .then(res => setArrSchedule(res.data.days))
            .catch(err => console.log(err.response.data))
    }, [])
    console.log(arrSchedule)
    if (arrSchedule === undefined) {
        return (
            <p>Carregando...</p>
        )
    }
    return (
        <Content>
            <p>
                Selecione o horário
            </p>
            {arrSchedule.map(sch => (
                <StyledSchedule>
                    <span>{sch.weekday} - {sch.date}</span>
                    <ContainerBotoes>
                        {sch.showtimes.map(element => (
                            <Link to={`/sitselection/${element.id}`}>
                                <Botao>
                                    {element.name}
                                </Botao>
                            </Link>
                        ))}
                    </ContainerBotoes>
                </StyledSchedule>
            ))
            }
        </Content>

    )
}
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

const StyledSchedule = styled.div`
    width: 90%; 
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 23px;
    font-size: 20px;
    margin-left: 24px;
`

const Botao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
`

const ContainerBotoes = styled.div`
    display: flex;
    gap: 0px 9px;
`