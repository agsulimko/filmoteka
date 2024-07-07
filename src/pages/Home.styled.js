import styled from 'styled-components';

const Select = styled.select`
  /* background-color: ${({ isDarkTheme }) =>
    isDarkTheme ? 'green' : 'red'};*/
  z-index: 100000;
`;

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  /* display: ${props => (props.visible ? 'block' : 'none')}; */
  background-color: #3470ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
  z-index: 10001;
`;
export { Select, BackToTopButton };
