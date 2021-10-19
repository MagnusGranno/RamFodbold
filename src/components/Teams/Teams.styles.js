import styled from 'styled-components';
import grass from '../../Images/grass.jpg';

export const Wrapper = styled.div`
  background-image: url(${grass});
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 30px;
`;

export const Content = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom-right-radius: 30px;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #fff;
  }
`;

export const Table = styled.div`
  margin: 20px 0;
  text-align: center;

  .styled-table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    margin: 5px 0;
    overflow: hidden;
    border-radius: 5px;

    font-size: 1.2em;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .styled-table thead tr {
    background-color: var(--primary-color);
    color: #ffffff;
    text-align: left;
  }
  .styled-table th,
  .styled-table td {
    padding: 12px 25px;
  }
  .styled-table tbody td {
    background-color: #fff;
    font-size: 1rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 20px;
    letter-spacing: 0.1rem;
    color: #fff;
  }
`;
