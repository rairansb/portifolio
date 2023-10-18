import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-image: linear-gradient(
    to right,
    #011b47,
    #00102a,
    #000713,
    #000000
  );
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 80px;
  padding-top: 10px;
  border-bottom: 2px solid #009af9;
  

  .container {
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .icons {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
  
     a {
        font-size: 35px;
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
}
`;
