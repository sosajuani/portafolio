import styled from 'styled-components'

export const SectionProjects = styled.section`
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (max-width: 970px){
        height: auto;
        padding: 10px;
    }
`
export const TitleProjects = styled.h1`
    padding: 10px;
    font-size: 2rem;
`
export const ProjectsContItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 970px){
        flex-direction: column;
        align-items: center;
    }
`
export const ItemProjectDiv = styled.div`
    width: 200px;
    height: 200px;
    background: #ddd;
    border-radius: 5px;
    position: relative;
    border: 1px solid #fff;
    margin: 10px;
    @media screen and (max-width: 970px){
        margin: 10px;
    }
    `
export const ImagenProjectsDiv = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    `
export const ImageClick = styled.div`
    background: rgba(0,0,0,0.9);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    opacity: ${({click})=> (click ? 1 : 0)};
    transition: opacity .5s ease-in;
`
export const LinksPortfolio = styled.div`
    width: 30%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`