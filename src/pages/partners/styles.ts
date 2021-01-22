import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10rem 2rem;

  border-bottom: 2px solid rgba(0,0,0,.35);

  img {
    max-width: 20rem;
    max-height: 3rem;
  }

  a {
    color: rgba(0,0,0,.5);
    transition: color 0.2s;

    font-size:1.5rem;
    font-weight: 500;

    text-transform: uppercase;

    text-decoration: none;

    & + a {
      margin-left: 1.2rem;
    }

    &:hover {
      color: #e8b317;
    }
  }
`;

export const TitleContainer = styled.section`
  max-width: 35rem;
  
  margin: 0 auto;
  text-align: center;

  h1 { 
    font-size: 3rem;
    line-height: 3.5rem;
    color: #3a3a3a;

    margin-top: 5rem;
  }

  h2 { 
    font-size: 2rem;
    color: rgba(0,0,0,.35);

    margin-top: 1rem;
  }
`;

export const Form = styled.form`
  margin-top: 3.5rem;

  display: flex;
  align-items: center;

  svg {
    position: absolute;
    z-index: 2;

    margin-left: 0.5rem;

    margin-right: auto;
  }


  input {
    flex: 1;

    height: 4.5rem;
    padding: 0 3rem;

    font-size: 1.2rem;
    color: #3a3a3a;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .6);

    border-radius: 0.7rem;
    border: 0.15rem solid rgba(0,0,0,.35);

    &::placeholder {
      font-size: 1.2rem;
      color: #a8a8b3;
    }
  }
`;

export const PartnersCard = styled.section``;