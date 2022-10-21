import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1920px;
  background-color: var(--WHITE);
  margin-top: 4.375rem;

  .post {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 20rem;
      width: 20rem;
      object-fit: cover;
    }

    .content {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 2.2rem 2.5rem 2.2rem 5rem;

      div {
        > p {
          margin-bottom: 0.5rem;
        }
        h1 {
          color: var(--YELLOW);
          margin-bottom: 0.875rem;
        }
      }

      img {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }
`;
