import { useState } from "react"
import styled from "styled-components"

const VERDE = { inner: "#1AAE9E", border: "#0E7D71" }
const CINZA = { inner: "#C3CFD9", border: "#7B8B99" }
const AMARELO = { inner: "#FBE192", border: "#F7C52B" }


export default function Seats({ seat, arrSeats, setArrSeats }) {
    const [selecionado, setSelecionado] = useState(false)
    function haveSeat(id) {

        setSelecionado(selecionado ? false : true)

        arrSeats.includes(id) ? (setArrSeats(arrSeats.filter(e => e !== id))) : setArrSeats([...arrSeats, id])
    }
    return (
        <>
            <Seat
                disabled={seat.isAvailable ? true : false}
                onClick={() => haveSeat(seat.id)}
                key={seat.id}
                color={selecionado ? VERDE : (seat.isAvailable ? AMARELO : CINZA)}>
                {seat.name}
            </Seat>
        </>
    )
}

const Seat = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color.inner};
    border: 1px solid ${props => props.color.border};
    font-size: 11px;
`