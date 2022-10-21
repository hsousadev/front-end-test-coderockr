import styled, { css } from "styled-components";
import {
  appearFromLeft,
  appearFromRight,
} from "../../../../../../styles/animation";

interface ContainerProps {
  isMirror?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 1920px;
  margin-top: 4.375rem;
  height: 20rem;
  background-color: var(--WHITE);

  ${(props) =>
    props.isMirror
      ? css`
          animation: ${appearFromRight} ease-in-out 1s;
        `
      : css`
          animation: ${appearFromLeft} ease-in-out 1s;
        `}

  .post {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--WHITE);
    max-width: 60rem;
    width: 100%;
    height: -webkit-fill-available;

    img {
      height: 100%;
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

  @media (max-width: 1830px) {
    .post .content {
      padding: 1.5rem;
    }
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 90%;
    background-color: transparent;
    margin-top: 1.5rem;

    #reverse {
      flex-direction: row-reverse;
    }

    .post {
      width: 100%;
      justify-content: space-between;
      max-width: initial;

      margin-bottom: 1.5rem;

      .content {
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }

  @media (max-width: 640px) {
    .post {
      img.cover {
        width: 20%;
        height: 20rem;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 340px) {
    .post img.cover {
      width: 15%;
    }
  }
`;
