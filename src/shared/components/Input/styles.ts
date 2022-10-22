import styled from "styled-components";

export const Container = styled.div`
  input {
    width: 35rem;
    height: 3.75rem;
    background: var(--WHITE);

    border: 1px solid #2d2d2d;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    padding: 1rem 1rem 0.5rem 1rem;

    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: var(--DARK);

    ::placeholder {
      font-family: "Rubik";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.51);
      margin-left: 1rem;

      width: 100%;
      height: 100%;
    }
  }
`;
