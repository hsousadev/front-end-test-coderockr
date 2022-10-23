import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin-bottom: 12.5rem;

  background-color: var(--WHITE);

  .hero {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 7.75rem;

    img {
      width: 50%;
      height: 50%;
    }

    .post-info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 40rem;
      height: 40rem;

      .content {
        width: 25rem;

        h3 {
          margin-bottom: 2.5rem;
        }

        p {
          margin-bottom: 1.875rem;
        }

        h1 {
          color: var(--YELLOW);
        }
      }
    }
  }

  .article {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    p {
      width: 100%;
      max-width: 48.75rem;
      margin-bottom: 10.5rem;
    }
  }

  @media (max-width: 1680px) {
    .hero {
      .post-info {
        height: 35rem;
      }
    }
  }

  @media (max-width: 1440px) {
    .hero {
      .post-info {
        height: 30rem;
      }
    }
  }

  @media (max-width: 1280px) {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .hero {
      align-items: center;
      flex-direction: column;
      margin: 0;

      img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
      }

      .post-info {
        align-items: center;
        height: auto;
        width: 100%;

        .content {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          width: 90%;
          margin: 2rem 0 2rem 0;
        }
      }
    }

    .article p {
      padding: 0 2rem;
      width: fit-content;
    }
  }

  @media (max-width: 500px) {
    margin-top: 0;
    margin-bottom: 0;

    .hero .post-info .content h3 {
      margin-bottom: 0.5rem;
    }

    .article p {
      padding: 0 1.5rem;
    }
  }
`;
