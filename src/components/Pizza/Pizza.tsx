import { TableRow, TableCell, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { IPizza } from "../../interfaces";
import { Modal } from "../Modal";
import { PizzaForm } from "../PizzaForm";

interface PizzaProps {
  pizza: IPizza;
  setPizza: React.Dispatch<React.SetStateAction<IPizza>>;
  pizzas: IPizza[];
  setPizzas: React.Dispatch<React.SetStateAction<IPizza[] | null>>;
}

export const Pizza: React.FC<PizzaProps> = ({ pizza, pizzas, setPizzas }) => {
  const [editPizza, setEditPizza] = useState<IPizza>(pizza);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEdit = () => {
    fetch(`https://localhost:7071/api/Pizzas/${pizza.id}`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        dataType: "text",
      },
      body: JSON.stringify({
        name: editPizza.name,
        price: editPizza.price,
        description: editPizza.description,
        image: editPizza.image,
        orders: null,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPizzas(pizzas?.map((p) => (p.id === pizza.id ? pizza : p)));
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = () => {
    fetch(`https://localhost:7071/api/Pizzas/${pizza.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPizzas(pizzas?.filter((p) => p.id !== pizza.id));
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <TableRow data-testid="test-pizza">
        <TableCell>{pizza.id}</TableCell>
        <TableCell>{pizza.name}</TableCell>
        <TableCell>{pizza.price}</TableCell>
        <TableCell>{pizza.description}</TableCell>
        <TableCell align="center">
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="outlined" color="error" onClick={handleDelete}>
              Usuń
            </Button>
            <Button variant="outlined" onClick={handleOpen}>
              Edytuj
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
      <Modal open={open} handleClose={handleClose}>
        <PizzaForm
          pizza={editPizza}
          setPizza={setEditPizza}
          onSave={handleEdit}
        />
      </Modal>
    </>
  );
};
