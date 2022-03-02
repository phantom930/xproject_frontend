import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography, Select, MenuItem, FormControl } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import { getUsersList } from "@services/admin/user.service";
import { Android12Switch } from "@themes/componentStyleOveride";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsersList()
            .then((data) => {
                setUsers(data.users);
            });
    }, []);

    const userStatus = status => {
        return status == "pending" ? false : true;
    }

    const toggleUserStatus = index => () => {
        let changedUsers = users;
        users[index].status = (users[index].status == 'pending' ? 'active' : 'pending');
        console.log(users[index].status);
        setUsers(users);
    }

    const displayingUsers = users.filter(user => user.role.name != 'superadmin');

    return (
        <TableContainer component={Paper} sx={{p:0}}>
            <Stack justifyContent='space-between' flexDirection='row' >
                <Typography variant='h6' p={3}>Users</Typography>
                <FormControl variant='standard'>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ width: '100px' }}
                        // value={age}
                        // label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Wallet Address</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayingUsers.map((user, index) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.id}
                            </TableCell>
                            <TableCell align="center">{user.username}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.wallet_address}</TableCell>
                            <TableCell align="center">
                                <FormControlLabel
                                    control={<Android12Switch checked={userStatus(user.status)} onClick={toggleUserStatus(index)} />}
                                    label="Active"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

