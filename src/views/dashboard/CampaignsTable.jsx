import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography, Select, MenuItem, FormControl, IconButton, Box } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons'


function createData(name, status, progress, dueDate, type) {
  return { name, status, progress, dueDate, type };
}

// Mockup datas
const status = [
  <Stack flexDirection='row' alignItems='center'> <Box sx={{ mr: 1, width: '12px', height: '12px', borderRadius: '10px', border: '2px solid #aaa', backgroundColor: '#8f0' }} /> Complete </Stack>,
  <Stack flexDirection='row' alignItems='center'> <Box sx={{ mr: 1, width: '12px', height: '12px', borderRadius: '10px', border: '2px solid #aaa', backgroundColor: '#88f' }} /> Pending </Stack>,
  <Stack flexDirection='row' alignItems='center'> <Box sx={{ mr: 1, width: '12px', height: '12px', borderRadius: '10px', border: '2px solid #aaa', backgroundColor: '#f33' }} /> Rejected </Stack>,
]

const type = [
  <FontAwesomeIcon color='#ddd' icon={faShopify}/>,
  <FontAwesomeIcon color='#ddd' icon={faShopify}/>,
  <FontAwesomeIcon color='#ddd' icon={faShopify}/>
]

const rows = [
  createData('Baby Shiner Brand', 0, 100, '01/12/2021', 0),
  createData('1 Million IG Dms', 1, 98.7, '01/12/2021', 1),
  createData('Forbes', 2, 76.8, '01/12/2021', 2),
];

export default function BasicTable() {
  const [day, setDay] = useState(10);

  const handleChangeDay = (e) => {
    setDay(e.target.value);
  }
  
  return (
    <TableContainer component={Paper} sx={{p:0}}>
      <Stack justifyContent='space-between' flexDirection='row' alignItems='center'>
        <Typography variant='h6' p={3}>Campaign</Typography>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{  mr: 2 }}
            size='small'
            value={day}
            // label="Age"
            onChange={handleChangeDay}
          >
            <MenuItem value={10}>Today</MenuItem>
            <MenuItem value={20}>Yesterday</MenuItem>
            <MenuItem value={30}>2 Days Before</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontWeight: 'bold' }}> { row.name } </TableCell>
              <TableCell> { status[row.status] } </TableCell>
              <TableCell> { row.progress + ' %' } </TableCell>
              <TableCell> { row.dueDate } </TableCell>
              <TableCell> { type[row.type] } </TableCell>
              <TableCell align='right'>
                <IconButton size='large'>
                  <FontAwesomeIcon color='#fff' fontSize='1rem' width='18px' icon={faEllipsisVertical} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

