import styled from 'styled-components';

export const PageArea = styled.section`
  .area {
    color: #fff;
    max-width: 1280px;
    padding: 30px;
    margin: 0 auto;
    padding-bottom: 30px;
    text-align: center;

    .cards {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      align-items: center;
      justify-content: center;

      .card {
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        width: 300px;

        img {
          width: 300px;
          height: 250px;
          border-radius: 15px 15px 0 0;
        }
        .detalhes {
          position: relative;
          top: -25px;
          width: 300px;
          background: #bbb;

          a {
            position: relative;
            left: 150px;
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
