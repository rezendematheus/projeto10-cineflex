import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Movies() {
    const [arrMovies, setArrMovies] = useState(undefined)
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(res => setArrMovies(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])
    if (arrMovies === undefined) {
        return (
            <Loading>
                Carregando...
            </Loading>
        )
    }
    return (
        <Content>
            <p>Selecione o filme</p>
            <StyledMovies>
                {arrMovies.map(movie => (
                    <Link to={`/schedule/${movie.id}`}>
                        <div>
                            <img src={movie.posterURL} alt={`${movie.id}`} />
                        </div>
                    </Link>
                ))}
            </StyledMovies>
        </Content>
    )
}

const Loading = styled.div`
`
const StyledMovies = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: 11px 30px;
    div{
        width: 145px;
        height: 209px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 129px;
        height: 193px;
    }
`
const Content = styled.div`
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
`