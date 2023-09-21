import styled from "styled-components";

export const PageArea = styled.section`
padding-top: 50px;
text-align: center;
.main{
  display: flex;
  align-items: center;
  justify-content: center;

  .aboutImg{
    display: flex;
    margin-top: 100px;
    flex: 1;
    }
    img{
      width: 300px;
      height: 400px;
    }

  .about{
      max-width: 450px;
      text-align:justify;

      h1{
        font-size: 30px;
        color: #25a7f8;
        margin-bottom: 20px;

      }
      
    }
   
  
}`;