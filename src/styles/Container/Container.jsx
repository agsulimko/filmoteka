import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  /* width: 100%; */
  /* width: 1440px; */
  margin: 0 auto;
  /* padding-left: 128px;
  padding-right: 128px; */
  padding-left: 5px;
  padding-right: 5px;
  align-content: center;

  /* background-color: gray; */

  @media screen and (min-width: 325px) {
    width: 325px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
