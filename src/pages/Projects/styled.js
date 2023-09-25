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
        justify-content: center;
        padding-top: 20px;
        width: 32%;

        img {
          width: 400px;
          height: 350px;
          border-radius: 15px;
        }
        .detalhes {
          width: 400px;
          position: relative;
          background: #ccc;
          top: -30px;
        }
      }
    }
  }
`;
