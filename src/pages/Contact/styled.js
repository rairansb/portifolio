import { styled } from 'styled-components';

export const PageArea = styled.section`
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  padding-top: 20px;

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .containerForm {
    padding: 30px 10px;

    label {
      font-size: 1rem;
      font-weight: bold;
    }
    textarea {
      padding: 10px;
      width: 100%;
      height: 200px;
      resize: none;
      border-radius: 10px;
    }

    .inputs {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;

      input {
        width: 390px;
        height: 40px;
        padding: 10px;
      }
    }

    button {
      margin-top: 20px;
      padding: 15px 15px;
      border-radius: 10px;
      background: #018d99;
      color: #fff;
      cursor: pointer;
      border: none;
      font-weight: bold;
    }
  }

  .containerDados {
    display: flex;
    flex-direction: column;
    margin: 30px;
    padding: 50px;
    justify-content: center;

    .contact {
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 10px;
      margin: 10px;
      border-radius: 10px;
      background: #018d99;
      color: #fff;

      .text {
        p {
          font-weight: bold;
        }
        a {
          color: #fff;
        }
      }
    }
  }
`;
