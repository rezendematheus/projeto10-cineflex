import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"



export default function Schedule() {
    const [info, setInfo] = useState()
    console.log(info)
    let { movieId } = useParams()
    const [arrSchedule, setArrSchedule] = useState(undefined)
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`)
            .then(res => {setArrSchedule(res.data.days); setInfo(res.data)})
            .catch(err => console.log(err.response.data))
    }, [])
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
            <Footer>
                <div><img src={info.posterURL} alt="selec muv"/></div>
                <span>{info.title}</span>
            </Footer>
        </Content>

    )
}
const Content = styled.div`
    font-family: 'Roboto', sans-serif;
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

const Footer = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;

    width: 374px;
    height: 109px;

    display: flex;
    align-items: center;
    gap: 0px 25px;

    box-sizing: border-box;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    div{
        background-color: #FFFFFF;
        width: 64px;
        height: 89px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    span{
        font-size: 24px;
        color: #293845;
    }
`