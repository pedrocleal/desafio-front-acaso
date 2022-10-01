import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-top: 60px;
  }

  h3 {
    margin: 80px auto;
    color: #fff;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 16px;

    @media (max-width: 760px) {
      margin: 49px auto;
      text-transform: none;
      font-size: 32px;
      letter-spacing: 0;
    }
  }
`

export const ConfirmEmailFormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .actions {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 40px;
      margin-bottom: 10px;
      color: #fff;

      @media (max-width: 780px) {
        margin-top: 24px;
        margin-bottom: 10px;
      }
    }

    button {
      width: 100%;
    }
  }

  @media(max-width: 780px) {
    padding: 0 24px;
  }
`
