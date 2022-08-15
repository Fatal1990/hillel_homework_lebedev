import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { addUser } from "../api/api";

export default function CreateUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const firstnameOnChange = (e) => {
    setFirstname(e.target.value);
  };

  const lastnameOnChange = (e) => {
    setLastname(e.target.value);
  };

  const phoneOnChange = (e) => {
    setPhone(e.target.value);
  };

  const redirect = useNavigate();

  const save = () => {
    addUser({ firstname, lastname, phone }).then((res) => redirect("/users"));
  };

  return (
    <UserForm
      firstname={firstname}
      lastname={lastname}
      phone={phone}
      firstnameOnChange={firstnameOnChange}
      lastnameOnChange={lastnameOnChange}
      phoneOnChange={phoneOnChange}
      save={save}
    />
  );
}
