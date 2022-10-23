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

          .react-tel-input .flag-dropdown {
            display: none;
          }
        }
      }

      img.loading {
        width: 2rem;
      }

      strong {
        color: var(--YELLOW);
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: max-content;
      }

      button.send {
        transition: all 0.5s ease-in-out;
        cursor: pointer;

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

        :hover {
          transition: all 0.5s ease-in-out;
          background: var(--YELLOW);
        }
      }

      #send-disabled {
        opacity: 50%;
        cursor: not-allowed;
        :hover {
          transition: all 0.5s ease-in-out;
          background: var(--DARK);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    overflow-y: hidden;
    zoom: 75%;

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      margin: 0;
      gap: 0;

      width: 100%;
      height: 100%;

      overflow: hidden;

      .box {
        margin-bottom: 2rem;
        width: 90%;

        .close-button button.close {
          margin: 0;
        }

        form {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 1rem;
          padding: 0;
          width: 90%;

          .field {
            width: 100%;

            label {
              width: 50%;
            }

            input,
            textarea {
              width: 95%;
            }
          }
        }

        button.send {
          margin-top: 4rem;
          p {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`;
