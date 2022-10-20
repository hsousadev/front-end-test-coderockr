import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  background-color: var(--DARK);

  padding: 1.75rem;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 80rem;

    h1 {
      color: var(--WHITE);
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 21rem;
      width: 100%;

      h2 {
        text-decoration: none;
        color: var(--WHITE);
      }
    }
  }
  @media (max-width: 1366px) {
    .content .buttons {
      max-width: 18rem;
    }
  }

  @media (max-width: 768px) {
    .content .buttons {
      max-width: fit-content;
      gap: 16px;
    }
  }

  @media (max-width: 425px) {
    .content {
      flex-direction: column;
    }
  }
`;
