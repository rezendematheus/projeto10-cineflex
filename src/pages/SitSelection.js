import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Seats from "../components/Seats"

// CORES
const VERDE = { inner: "#1AAE9E", border: "#0E7D71" }
const CINZA = { inner: "#C3CFD9", border: "#7B8B99" }
const AMARELO = { inner: "#FBE192", border: "#F7C52B" }

export default function SitSelection({resume, setResume}) {
    
    let objResume;
    const navigate = useNavigate()
    const [sits, setSits] = useState(undefined)
    const [arrSeats, setArrSeats] = useState([])
    const { scheduleId } = useParams()

    const [form, setForm] = useState({
        ids:arrSeats,
        name:"",
        cpf: ""
    })
    function handleForm(e){
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    function postSeats(e){
        e.preventDefault()
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
        axios.post(URL, form)
        .then(res => {
            objResume = {
                movie:sits.movie.title,
                day:sits.day.date,
                hour:sits.name,
                seats:[sits.seats.filter(s => (
                    arrSeats.includes(s.id)
                ))],
                form:form
            };
            setResume({...resume, objResume}); 
            navigate("/resume")
    })
        .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${scheduleId}/seats`)
            .then((res) => setSits(res.data))
            .catch(err => err.response.data)
    }, [])

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
                    {sits.seats.map(seat =>
                        <Seats seat={seat} arrSeats={arrSeats} setArrSeats={setArrSeats} />
                    )}
                </ContainerSeats>

                <ContainerLabel>
                    <Label color={VERDE}>
                        <div></div>
                        Selecionado
                    </Label>
                    <Label color={CINZA}>
                        <div></div>
                        Disponível
                    </Label>
                    <Label color={AMARELO}>
                        <div></div>
                        Indisponível
                    </Label>
                </ContainerLabel>

                <form onSubmit={postSeats}>
                    <label>
                        Nome do comprador:
                        <input name="name" placeholder="Digite seu nome..." type="text" value={form.name} onChange={handleForm}/>
                    </label>
                    <label>
                        CPF do comprador:
                        <input name="cpf" placeholder="Digite seu CPF..." type="number" value={form.cpf} onChange={handleForm}/>
                    </label>
                    <button type="submit">{`Reservar assento(s)`}</button>
                </form>
            </StyledSitSelection>
        </Content>

    )
}

const StyledSitSelection = styled.div`
`

const Content = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    form{                   
        margin-top: 40px;
        width: 320px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px 0px;
        input {
            width: 100%;
            height: 50px;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
            ::placeholder{
                font-style: italic;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                display: flex;
                align-items: center;
            }
        }
        label{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2px 0px
        }
        button{
            font-size: 18px;
            color: #FFFFFF;
            border: none;
            margin-top: 57px;
            width: 225px;
            height: 42px;
            background: #E8833A;
            border-radius: 3px;
        }
    }
`
const ContainerSeats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 325px;
    gap: 18px 7px;
`

const ContainerLabel = styled.div`
    display: flex;
    justify-content: center;
    gap: 0px 50px;
    margin-top: 11px;
`

const Label = styled.div`
    width: fit-content;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.color.inner};
        border: 1px solid ${props => props.color.border};
    }
`