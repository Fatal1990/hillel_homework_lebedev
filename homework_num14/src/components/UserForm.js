import React from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserForm({
  firstname,
  lastname,
  phone,
  firstnameOnChange,
  lastnameOnChange,
  phoneOnChange,
  save,
}) {
  const redirect = useNavigate();

  return (
    <div className='flex-container'>
      <form noValidate autoComplete='off' onSubmit={(e) => e.preventDefault()}>
        <TextField
          label='First name'
          variant='outlined'
          color='success'
          value={firstname}
          onChange={firstnameOnChange}
          required
          sx={{ marginRight: 10 + "px" }}
        />
        <TextField
          label='Last name'
          variant='outlined'
          color='success'
          value={lastname}
          onChange={lastnameOnChange}
          required
          sx={{ marginRight: 10 + "px" }}
        />
        <TextField
          label='Phone'
          variant='outlined'
          color='success'
          value={phone}
          onChange={phoneOnChange}
          required
        />
        <div className='flex-container'>
          <Button
            variant='contained'
            color='success'
            onClick={save}
          >
            Save user
          </Button>
          <Button
            variant='contained'
            color='success'
            onClick={() => redirect("/users")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
