import styled from "styled-components";

export const Container = styled.div`
  --DARK: #2d2d2d;
  --DARK-YELLOW: #342303;
  --YELLOW: #f1a10a;
  --WHITE: #fff;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(90deg, var(--YELLOW) 0%, var(--DARK-YELLOW) 100%);
  min-height: 100vh;

  button {
    appearance: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.68rem;
    margin: 0;
  }

  h2 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;
    margin: 0;
  }

  h3 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 26px;
    margin: 0;
  }

  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.125rem;
    color: var(--DARK);
    margin: 0;
  }

  label {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.125rem;
    color: var(--DARK);
    margin: 0;
  }

  textarea {
    width: 35rem;
    height: 12rem;
    resize: none;
    margin-top: 0.5rem;

    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.51);
    padding: 1rem 1rem 0.5rem 1rem;
  }

  @media (max-width: 1830px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 1556px) {
    h1 {
      font-size: 1.75rem;
      line-height: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.125rem;
    }

    p,
    h3 {
      font-size: 0.75rem;
    }
  }
`;
