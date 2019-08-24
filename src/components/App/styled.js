import styled from 'styled-components';


export const Wrapper = styled.div`
  color: #rgb(31, 31, 36);
  background-color: rgb(254, 254, 254);

  @media print {
    & > nav,
    & > footer {
      display: none;
    }

    & > main {
      & > section {
        padding: 0;
      }
    }

    button {
      display: none;
    }
  }
`;
