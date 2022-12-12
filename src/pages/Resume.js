import { Link } from "react-router-dom"
import styled from "styled-components"



export default function Resume({ resume }) {
    const { movie, day, hour, seats, form } = resume.objResume
    return (
        <Content>
            <p>
                Pedido feito com sucesso!
            </p>
            <Infos>
                <Info>
                    <strong>Filme e sessão</strong>
                    <div>
                        {movie} <br />
                        {day} {hour}
                    </div>
                </Info>
                <Info>
                    <strong>Ingressos</strong>
                    <div>
                        {seats.map(s => (s.map(e => (
                            <>{`Assento ${e.name}`} <br /></>
                        ))))}
                    </div>
                </Info>
                <Info>
                    <strong>Comprador</strong>
                    Nome: {form.name} <br />
                    CPF:  {form.cpf}
                </Info>
            </Infos>
            <Link to="/">
                <HomeButton>
                    Voltar para Home
                </HomeButton>
            </Link>
        </Content>
    )
}

const Info = styled.div`
    color: #293845;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    gap: 9px 0px;
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    strong{
        font-weight: 700;
        font-size: 24px;
    }
`

const Infos = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap:35px 0px;
    margin-top: 35px;
    margin-left: 30px;
`

const Content = styled.div`
    font-family: 'Roboto', sans-serif;
    margin-top: 67px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        display: flex;
        height: 110px;
        width: 40%;
        color: #247A6B;
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`
const HomeButton = styled.button`
    font-size: 18px;
    color: #FFFFFF;

    width: 225px;
    height: 42px;
    margin-top: 110px;

    background-color: #E8833A;
    border-radius: 3px;
    border: none;
`