import { styled } from 'styled-components';

export const PageArea = styled.section`
  background-image: linear-gradient(
    to right,
    #011b47,
    #00102a,
    #000713,
    #000000
  );
  color: #fff;
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
        margin-left: 10px;
        h3 {
          font-size: 25px;
        }

        .cursos {
          margin: 20px;
        }
      }

      .skills {
        max-width: 700px;
        h3 {
          font-size: 25px;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          .card {
            margin: 10px;
            width: 200px;

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
