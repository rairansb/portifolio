import { styled } from 'styled-components';

export const PageArea = styled.div`
  padding: 210px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  .presentation {
    text-align: center;
    max-width: 550px;
    padding-top: 50px;
    flex: 1;
    color: #fff;

    .hero {
      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 40px;
        font-weight: bold;
      }
    }

    .name {
      width: 550px;
      margin: 20px;
      background-color: #018d99;
      padding: 5px 10px;
      text-align: center;
      border-radius: 10px;
      font-weight: bold;
    }
    .function {
      margin: 20px;
      font-size: 18px;
      text-align: justify;

      p {
        margin-bottom: 25px;
      }

      a {
        cursor: pointer;
        color: #fff;
        margin-right: 10px;
        border-bottom: 3px solid #fff;
        transition: all ease 0.2s;
      }
      a:hover {
        border-bottom: 3px solid #018d99;
      }

      .cv {
        text-align: center;
        margin: 10px;
        background-color: #018d99;
        border-radius: 10px;
        padding: 7px 15px;
        border-bottom: none;
        &:hover {
          border-bottom: none;
        }
      }
    }
  }
  .iconsArea {
    display: flex;
    align-items: center;
    justify-content: center;

    .icons {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;

      a {
        font-size: 30px;
        color: #25a7f8;
        transition: all ease 0.2s;
      }
      a:hover {
        color: #fff;
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
      }
    }
  }
`;
