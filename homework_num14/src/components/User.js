import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser, getUser } from "../api/api";
import UserForm from "./UserForm";

export default function User() {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const redirect = useNavigate();

  const save = () => {
    updateUser(id, { firstname, lastname, phone }).then((res) =>
      redirect("/users")
    );
  };

  const firstnameOnChange = (e) => {
    setFirstname(e.target.value);
  };

  const lastnameOnChange = (e) => {
    setLastname(e.target.value);
  };

  const phoneOnChange = (e) => {
    setPhone(e.target.value);
  };

  useEffect((id) => {
    getUser(id).then((res) => {
      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setPhone(res.data.phone);
    });
  }, []);

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
