import styled from 'styled-components'

export const SectionAbout = styled.section`
    flex-direction: column;
    @media screen and (max-width: 970px){
        /* height: auto; */
        padding: 10px;
    }
`
export const TitleAbout = styled.h1`
    padding: 10px;
    /* background: rebeccapurple; */
    font-size: 2rem;
`
export const ContAbout = styled.p`
    /* white-space: pre-line; */
    color: #8395a7;
    text-shadow: 0 2px 2px #000;
    margin: 0.7rem 0;
`
export const TechnologiesCont = styled.div`
    color: #8395a7;
    width: 80%;
    filter: drop-shadow(0 4px 4px rgba(0,0,0,.6));
    display: flex;
    flex-direction: column;
`
export const SubtitleAbout = styled.h3`
    margin: 1rem 0;
    padding: 0;
    font-size: 2rem;
    text-align: center;
    display: inline-block;
    margin: auto;
    &:after{
        content: "";
        background: linear-gradient(90deg,transparent 0%, #c8d6e5 50%,#c8d6e5 50%, transparent 100%);
        height: 1px;
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 970px){
        &:after{
            content: "";
            background: linear-gradient(90deg, #c8d6e5 0%, transparent 80%);
            position: absolute;
            width: 80%;
            height: 1px;
            display: flex;
            flex-direction: column;
        }
    }
`
export const IconsContAbout = styled.div`
    padding: 10px;
    font-size: 4rem;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem auto;
    @media screen and (max-width: 970px){
        border: 1px solid #8395a7;
        border-radius: 5px;
        font-size: 3rem;
        flex-wrap: wrap;
    }
`
export const Tooltip =styled.div`
    background: rgba(0,0,0,1);
    font-size: .8rem;
    position:relative;
    bottom: 0;
    padding: 5px;
    border-radius: 5px;
    box-shadow: inset 0 -1px 0 #fff;
    border: 1px solid #000;
    color: #fff;
`
export const IconItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`