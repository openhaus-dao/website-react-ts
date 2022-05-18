import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    border-bottom: 0.2px solid rgba(0, 0, 0, 0.2);
    height: 40px;
    width: 100%;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const LogoContainer = styled.div`
    font-size: 24px;
    font-weight: 600;
    display: flex;
    height: 100%;
    width: content-fit;
    margin-right: 15px;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    @media screen and (max-width: 576px) {
        font-size: 1.15rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.55rem;
        margin-left: 25px;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    width: fit-content;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 576px) {
        font-size: 1.2rem;
        display: inline;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.05rem;
        display: inline;
    }
`;

export const RightNavIcon = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    visibility: hidden;

    @media screen and (max-width: 576px) {
        visibility: visible;
    }

    @media screen and (max-width: 576px) {
        visibility: visible;
    }
`;

export const RightNavOptionsContainer = styled.div`
    z-index: 1;
    padding: 20px;

    @media screen and (max-width: 768px) {
        background-color: white;
    }
`;

export const NavOption = styled.a`
    display: flex;
    margin: 20px;
    font-size: 1.8rem;
    cursor: pointer;
    text-decoration: none;
    color: black;

    @media screen and (max-width: 576px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const JoinUs = styled.a`
    display: flex;
    background: var(--btn-color);
    color: white;
    border-radius: 30px;
    border: 2px solid transparent;
    text-decoration: none;
    transition: background-color 200ms ease-in-out;
    cursor: pointer;
    justify-content: flex;
    font-weight: 600;
    padding: 1.2rem 2rem;
    font-size: 1.8rem;
    @media screen and (max-width: 576px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;
