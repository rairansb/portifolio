import styled from 'styled-components';

export const FooterArea = styled.div`
  height: 100px;
  background-image: linear-gradient(to right, #011b47, #00102a, #000713,  #000000);
  color: #fff;

  .containe {
    max-width: 1280px;
    margin: auto;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    ul, li, a {
      display: flex;
      align-items: center;
      gap:10px;
      list-style: none;
      color: #fff;
    }
  }
`;
