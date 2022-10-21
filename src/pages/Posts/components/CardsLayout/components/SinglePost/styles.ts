import styled, { css } from "styled-components";

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
        `
      : css`
          justify-content: flex-end;
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

      padding: 0 2.5rem;
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
`;
