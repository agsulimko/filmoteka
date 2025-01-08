import styled from 'styled-components';

// Стили для кнопки
const Btn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  /* border: none;
  outline: none;
  background-color: rgb(255, 0, 0);
  color: white;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: transform 0.3s ease;
*/
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export { Btn };
