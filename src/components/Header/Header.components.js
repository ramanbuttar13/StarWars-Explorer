import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgb(17, 46, 81);
  height: 60px;
  padding: 30px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    vertical-align: middle;
    margin-left: 16px;
  }
  img {
    width: 70px;
    margin-right: 20px;
  }
`;
export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    vertical-align: middle;
  }
  @media screen and (max-width: 470px) {
    display: grid;
    justify-content: flex-end;
    row-gap: 10px;
    button {
      height: 30px;
      width: 100px;
    }
  }
`;