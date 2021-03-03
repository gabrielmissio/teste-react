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


class TableRegister extends React.Component {
  constructor () {
      super();

      this.state = {
          tableData: [{
              
          }],
          paginationInfo: [{

          }],
          page: 0,
          rowsPerPage: 10
      };
      
  }


  componentDidMount () {
    var url = 'https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/hml/register?page='+this.state.page+'&paginate_by='+this.state.rowsPerPage
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
      const handleChangeRowsPerPage = (event) => {
        this.setState({ rowsPerPage: +event.target.value },() => this.setState({ page: 0 }, () => this.componentDidMount ()));
      };
      const handleChangePage = (event, newPage) => {
        this.setState({ page: newPage+1 },() => this.componentDidMount ());
        console.log(newPage)
      };
      return (
        <Paper elevation={3} >
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.paginationInfo.current_page -1}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onChangePage={handleChangePage}
          />
        </Paper>
      );
  }
};

ReactDOM.render(<div><TableRegister/></div>, document.getElementById("root"));

export default TableRegister;