import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'description', label: 'Description', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 50 },
  {
    id: 'value',
    label: 'Value',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'inserted_at',
    label: 'Inserted at',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'updated_at',
    label: 'Updated at',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];


class TableExp extends React.Component {
  constructor () {
      super();

      this.state = {
          tableData: [{
              
          }],
          paginationInfo: [{

          }]
      };
      this.page = 0;
      this.rowsPerPage = 10;
  }


  componentDidMount () {
    var url = 'https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/hml/register?page='+this.page+'&paginate_by='+this.rowsPerPage
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        var data = response.data
        this.setState({ tableData: data.registers });
        this.setState({ paginationInfo: data.metadata });
    });
  }

  render () {
      const { tableData } = this.state;
      //console.log(this.state.paginationInfo.total_pages)
      
      return (
        <Paper>
          <TableContainer style={{ maxHeight: 440}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.slice().map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={this.state.paginationInfo.total_rows}
            rowsPerPage={this.rowsPerPage}
            page={this.state.paginationInfo.current_page -1}
          />
        </Paper>
      );
  }
};

ReactDOM.render(<div><TableExp/></div>, document.getElementById("root"));

export default TableExp;