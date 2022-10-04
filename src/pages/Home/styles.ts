import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0F0F0F;
`

export const Container = styled.div`
  background: #000004;
  width: 90vw;
  height: 90vh;
  padding: 0 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .bold {
    font-weight: 700;
  }

  h1 {
    color: #fff;
    font-size: 70px;
    font-weight: 400;
    font-style: italic;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  button {
    margin-top: 32px;
  }

  img {
    height: 600px;

    @media (max-width: 1080px) {
      height: 400px;
    }

    @media (max-width: 780px) {
      height: 300px;
    }
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`
