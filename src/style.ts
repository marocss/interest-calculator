/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;

  background-color: #020202;
  color: #e3e3e3;

  h1 {
    font-size: 3rem;
  }
`;

export const InputSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 30px 0;

  background: #000007;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.8rem;
      color: #a7a7a7;
    }

    input {
      margin-top: 7px;
      height: 50px;
      width: 220px;
      border-radius: 4px;
      background: transparent;
      border: 1px solid #818181;
      font-size: 2.3rem;
      color: #a7a7a7;
      padding: 0px 7px;

      &:focus {
        border: 1px solid #fff;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      & + div {
        span {
          margin-top: 15px;
        }
      }

      input {
        width: 80vw;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 45px;
    height: 45px;
    width: 190px;
    background: #e3e3e3;
    color: #212121;
    font-size: 1.7rem;
    font-family: Inconsolata;
    border: none;
    font-weight: bold;
    border-radius: 12px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e3e3e3')};
    }
  }

  @media (max-width: 768px) {
    button {
      width: 80vw;
    }
  }
`;

export const Row = styled.section`
  display: flex;

  & + section {
    margin-top: 25px;
  }

  div {
    & + div {
      margin-left: 60px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & + section {
      margin-top: 15px;
    }

    div {
      & + div {
        margin-left: 0px;
      }
    }
  }
`;

export const ResultsSection = styled.section`
  background: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;

  background: #000007;
  color: #e3e3e3;

  div {
    display: flex;
    width: 50%;
    max-width: 490px;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-top: 15px;
    }
  }

  p {
    font-size: 2rem;
  }

  input {
    margin-left: 30px;
    height: 50px;
    width: 220px;
    border-radius: 4px;
    background: transparent;
    border: 1px solid #818181;
    font-size: 2.3rem;
    color: #fff;
    padding: 0px 7px;
  }

  @media (max-width: 768px) {
    align-items: center;

    div {
      max-width: 100%;
      width: 80vw;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    input {
      width: 80vw;
      margin-left: 0px;
      margin-top: 5px;
    }
  }
`;

export const Footer = styled.div`
  height: 40px;
  background: #000;
`;
