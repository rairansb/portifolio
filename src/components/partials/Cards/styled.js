import styled from 'styled-components';

export const Service = styled.section`
  margin: 50px;
  .serviceTitle {
    padding: 30px;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 30px;

    .card {
      display: block;
      width: 400px;
      padding: 20px;
      align-items: start;
      background: rgb(59 130 246 / 0.5);
      text-align: start;
    }
  }
`;
