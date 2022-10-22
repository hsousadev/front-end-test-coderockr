import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;

  .content {
    background-color: var(--WHITE);
    margin: 50rem 0 10rem 0;

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 7rem;

      .close-button {
        padding-top: 2.5rem;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        button.close {
          cursor: pointer;
          border: none;
          margin-right: 2.5rem;
          background-color: transparent;
        }
      }

      form {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        border: none;
        padding: 0 7rem 4.5rem 7rem;

        height: 56.875rem;
        gap: 3rem;

        h1 {
          text-align: center;
          color: var(--YELLOW);
          margin-bottom: 3rem;
          width: 100%;
        }

        .field {
          display: flex;
          flex-direction: column;
        }
      }

      button.send {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #2d2d2d;
        border: none;

        gap: 2rem;
        width: 14rem;
        height: 4rem;
        border-radius: 4px;

        p {
          font-weight: 500;
          color: var(--WHITE);
        }
      }
    }
  }
`;
