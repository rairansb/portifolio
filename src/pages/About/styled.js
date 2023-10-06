import styled from 'styled-components';

export const PageArea = styled.section`
  height: 100%;
  padding: 50px 0;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  .main {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

    .aboutImg {
      flex: 1;
      max-width: 550px;
      border-radius: 20px;
      background-color: rgb(59 130 246 / 0.5);
      display: flex;
      margin-top: 50px;
      gap: 10px;
      color: #fff;

      img {
        border-radius: 10px;
        box-shadow: 20px 15px 15px #025;
        left: -25px;
        height: 250px;
        position: relative;
        top: -60px;
      }
      .dados {
        padding: 10px;
        text-align: left;

        h2 {
          font-size: 30px;
        }

        p > span {
          font-size: 20px;
          font-weight: bold;
          color: black;
        }
      }
    }

    .about {
      margin-top: 50px;
      max-width: 450px;
      text-align: justify;

      h1 {
        font-size: 30px;
        color: #009af9;
        margin-bottom: 20px;
      }
    }
  }
`;
