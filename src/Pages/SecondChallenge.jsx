import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import BaseTable, { Column } from "react-base-table";
import "react-base-table/styles.css";
import Navbar from "../components/Navbar";
import { api } from "../services";

const SecondChallenge = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);

  const getUsers = async () => {
    const data = await api.users.getUsers();
    setUsers(data.users);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = async (product) => {
    setOpen(true);
    const data = await api.users.getUser(product);
    setUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", height: '100vh' }}>
      <Navbar />
      <h1 className="titleChallenge" style={{ marginTop: "10px" }}>
        Second Challenge
      </h1>
      <BaseTable
        height={600}
        width={600}
        data={users}
        style={{
          margin: "auto",
          marginTop: 35,
        }}
      >
        <Column
          dataKey="firstName"
          title="Nombre"
          key="firstName"
          width={100}
        />
        <Column
          dataKey="lastName"
          title="Apellido"
          key="lastName"
          width={100}
        />
        <Column dataKey="age" title="Edad" key="age" width={60} />
        <Column
          dataKey="username"
          title="Username"
          key="username"
          width={100}
        />
        <Column dataKey="ip" title="IP" key="ip" width={120} />
        <Column
          dataKey="image"
          title="Imagen"
          key="image"
          cellRenderer={({ cellData }) => (
            <img
              src={cellData}
              alt="user"
              style={{
                width: 50,
                borderRadius: 50,
                border: "2px solid crimson",
                background: "black",
              }}
            />
          )}
          width={100}
        />
        <Column
          dataKey="action"
          title="Acción"
          key="action"
          width={135}
          cellRenderer={({ rowData }) => (
            <button
              onClick={() => {
                handleModal(rowData.id);
              }}
              style={{
                backgroundColor: "crimson",
                color: "white",
                border: "2px solid black",
                padding: "5px",
                borderRadius: 15,
                cursor: "pointer",
              }}
            >
              Show Modal
            </button>
          )}
        />
      </BaseTable>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            border: "2px solid #000",
            borderRadius: 10,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "crimson",
              fontFamily: "Courier New",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Datos complementarios
          </h1>
          <img
            src={user.image}
            alt="user"
            style={{
              width: 100,
              borderRadius: 50,
              border: "2px solid crimson",
              background: "black",
            }}
          />

          <p>
            <span style={{ fontWeight: "bold" }}>Nombre: </span>
            {user.firstName}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Apellido:</span>{" "}
            {user.lastName}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Edad:</span> {user.age}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Username:</span>{" "}
            {user.username}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>IP:</span> {user.ip}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Correo:</span> {user.email}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Genero:</span> {user.gender}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Altura:</span> {user.height}cm
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Celular:</span> {user.phone}
          </p>
        </Box>
      </Modal>
    </Box>
  );
};

export default SecondChallenge;
