import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-image: linear-gradient(
    to right,
    #011b47,
    #00102a,
    #000713,
    #000000
  );
  height: 60px;
  border-bottom: 2px solid #009af9;

  .container {
    max-width: 1280px;
    margin: auto;
    display: flex;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3,
    .logo-4 {
      font-size: 30px;
      font-weight: bold;
      color: #fff;
    }
  }

  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      magin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
      gap: 30px;
    }
    li {
      a,
      button {
        padding: 2px 5px;
        border: 0;
        background: none;
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        outline: 0;

        &:hover {
          border-radius: 4px;
          background-color: #607ec9;
        }

        &.button {
          background-color: #1c4c96;
          border-radius: 4px;
          color: #fff;
          padding: 5px 10px;
        }

        &.button:hover {
          background-color: #607ec9;
        }
      }
    }
  }
`;
