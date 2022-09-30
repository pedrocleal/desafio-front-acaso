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
    margin: 50px auto;
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

export const SignUpFormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .flex-group {
    width: 100%;
    display: flex;
    gap: 24px;
  }

  .show-password {
    position: absolute;
    right: 10px;
    top: 45px;
    cursor: pointer;
  }

  .actions {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-direction: column;

    button {
      width: 100%;
    }
  }

  @media(max-width: 780px) {
    padding: 24px;
  }
`
