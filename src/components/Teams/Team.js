import { Table } from './Teams.styles';
export const Team = ({ name, price, coach, players }) => {
  return (
    <>
      <Table>
        <h2>{name}</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Kontigent</th>
              <th>Træner</th>
              <th>Spillere</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{price} kr.</td>
              <td>{coach}</td>
              <td>{players}</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </>
  );
};
