import React, { useState, useEffect } from "react";
import { getUsers, removeUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const redirect = useNavigate();

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleUserClick = (id) => {
    redirect(`/user/${id}`);
  };

  const remove = (id) => {
    removeUser(id);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleDelBtn = (e, id) => {
    e.stopPropagation();
    remove(id);
  };

  return (
    <>
      <div className='flex-container'>
        <Button
          variant='contained'
          color='success'
          onClick={() => redirect("/")}
        >
          Main Page
        </Button>
        <Button
          variant='contained'
          color='success'
          onClick={() => redirect("/user/create")}
        >
          Add new user
        </Button>
      </div>
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='left'>First name</TableCell>
              <TableCell align='left'>Last name</TableCell>
              <TableCell align='left'>Phone</TableCell>
              <TableCell align='center'>Delete user</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.id}
              >
                <TableCell align='center'>{user.id}</TableCell>
                <TableCell align='left'>{user.firstname}</TableCell>
                <TableCell align='left'>{user.lastname}</TableCell>
                <TableCell align='left'>{user.phone}</TableCell>
                <TableCell align='center'>
                <Button
                    variant='contained'
                    color='success'
                    sx={{ margin: 10 + 'px' }}
                    onClick={handleUserClick.bind(null, user.id)}
                    >
                    Edit
                  </Button>
                  <Button
                    variant='contained'
                    color='success'
                    onClick={(e) => handleDelBtn(e, user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
