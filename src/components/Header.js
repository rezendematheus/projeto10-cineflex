import styled from "styled-components"

export default function Header(){
    return(
        <StyledHeader>CINEFLEX</StyledHeader>
    )
}

const StyledHeader = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 67px;
    font-size: 34px;
    color: #E8833A;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
`