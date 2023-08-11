import styled from 'styled-components';

const UlList = styled.ul`
  list-style: none;
  width: 400px;
  padding-left: 0;

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  button {
    padding: 2px;
    cursor: pointer;
  }
`;

export default UlList;