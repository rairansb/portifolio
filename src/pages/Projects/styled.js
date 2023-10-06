import { styled } from 'styled-components';

export const PageArea = styled.section`
  .area {
    padding-top: 30px;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;

    .cards {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        width: 350px;

        img {
          width: 350px;
          height: 300px;
          border-radius: 15px 15px 0 0;
        }
        .detalhes {
          width: 350px;
          background: #bbb;

          a {
            position: relative;
            left: 175px;
            bottom: -10px;
            background: #018d99;
            padding: 0px 5px;
            border-radius: 50%;
            color: #fff;
            font-size: 30px;
          }
        }
      }
    }
  }
`;
