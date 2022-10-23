import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--DARK);

  padding: 1.75rem;
  width: 100%;
  position: fixed;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 66%;

    a {
      transition: all 0.3s ease-in-out;
      :hover {
        transition: all 0.3s ease-in-out;
        opacity: 50%;
      }
    }

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
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        color: var(--WHITE);

        :hover {
          transition: all 0.3s ease-in-out;
          opacity: 50%;
        }
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
