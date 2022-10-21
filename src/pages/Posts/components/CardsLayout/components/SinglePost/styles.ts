import styled, { css } from "styled-components";
import {
  appearFromLeft,
  appearFromRight,
} from "../../../../../../styles/animation";

interface ContainerProps {
  mirror?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1920px;
  margin-top: 4.375rem;

  display: flex;
  align-items: center;

  ${(props) =>
    props?.mirror
      ? css`
          justify-content: flex-start;
          animation: ${appearFromLeft} ease-in-out 1.25s;
        `
      : css`
          justify-content: flex-end;
          animation: ${appearFromRight} ease-in-out 1.25s;
        `}

  .content {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    width: 66.66%;
    height: 40rem;

    background-color: white;

    > img {
      width: 40rem;
    }

    .sub-content {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;

      padding: 0 2.5rem 2.75rem 2.5rem;
      width: 100%;

      div {
        padding: 0 2.5rem;
        margin-bottom: 6.125rem;

        p {
          margin-bottom: 24px;
        }

        h1 {
          color: var(--YELLOW);
          margin-bottom: 0.75rem;
        }
      }
    }
  }

  @media (max-width: 1830px) {
    .content {
      height: 30rem;
      img {
        height: 100%;
      }

      .sub-content {
        padding: 1.5rem;
        div {
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 1280px) {
    margin-top: 0;
    width: 90%;

    .content {
      ${(props) =>
        props.mirror &&
        css`
          flex-direction: row-reverse;
        `}

      width: 100%;

      img.cover {
        width: 50%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 540px) {
    /* margin-top: 2rem; */

    .content {
      img.cover {
        width: 30%;
      }
    }
  }

  @media (max-width: 340px) {
    .content img.cover {
      width: 15%;
    }
  }
`;
