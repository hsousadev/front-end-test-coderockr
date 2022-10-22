import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
