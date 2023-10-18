import styled from 'styled-components';

export const PageArea = styled.section`
  color: #000;
  background: #ccc;
  .container {
    max-width: 1280px;
    margin: 0 auto;

    .title {
      padding: 30px;
      text-align: center;
      font-size: 20px;
      p {
        font-size: 18px;
      }
    }

    .areaCentral {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;

      .education {
        max-width: 600px;
        margin-left: 10px;
        h3 {
          font-size: 25px;
        }

        .cursos {
          margin: 20px;
        }
      }

      .skills {
        max-width: 500px;
        h3 {
          font-size: 25px;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          .card {
            text-align: center;
            margin: 10px;
            width: 130px;

            img {
              height: 80px;
            }
            .bgStatusBar {
              height: 12px;
              background-color: #fff;
              border-radius: 10px;

              .statusBar {
                height: 12px;
                background-color: #018d99;
                border-radius: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
