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

export const LoginFormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .show-password {
    position: absolute;
    right: 10px;
    top: 45px;
    cursor: pointer;
  }

  .create-new-account-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    span {
      color: #fff;
      margin-bottom: 8px;
    }
  }

  @media(max-width: 780px) {
    padding: 0 24px;
  }
`
