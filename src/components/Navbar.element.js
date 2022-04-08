import styled from 'styled-components'

export const NavbarCont = styled.nav`
    width: 100%;
    color: #c8d6e5;
    position: fixed;
`

export const NavbarUl = styled.ul`
    background: #222f3e;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: #c8d6e5;
    position: sticky;
    top: 0;
    position: fixed;
    top: 0;
    @media screen and (max-width: 970px){
        top: 0;
        left: ${({click})=> (click ? 0 : '-100%')};
        bottom: 0;
        flex-direction: column;
        text-align: center;
        font-size: 3rem;
        transition: all ease .5s;
        z-index: 1;
    }
`
export const NavbarLi = styled.li`
    padding: 10px;
    &:last-child{
        display: none;
    }
    @media screen and (max-width: 970px){
        width: 100%;
        filter: drop-shadow(0 4px 4px rgb(0 0 0 / 50%));
        &:last-child{
            display: block;
        }   
    }
`

export const NavMobileMenu = styled.div`
    display: none;
    @media screen and (max-width: 970px){
        position: absolute;
        display: flex;
        z-index: 1;
        padding: 10px;
        font-size:  2rem;
        width: 100%;
        justify-content: end;
    }
`