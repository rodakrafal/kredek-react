import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Modal, Pizza, PizzaForm } from "..";
import { emptyPizza, IPizza } from "../../interfaces";

export const PizzaList = () => {
  const [pizzas, setPizzas] = useState<IPizza[] | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [pizza, setPizza] = useState<IPizza>(emptyPizza);

  function getPizzas() {
    fetch("https://localhost:7071/api/Pizzas")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPizzas(data);
      });
  }

  function addPizza() {
    fetch("https://localhost:7071/api/Pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: pizza.name,
        price: pizza.price,
        description: pizza.description,
        image: pizza.image,
        orders: null,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        getPizzas();
      });
  }

  const handleAdd = () => {
    addPizza();
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const unsibscribe = () => getPizzas();

    return () => {
      unsibscribe();
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          padding: "8px 16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <h3>Brakuje? Nie wstydź się</h3>
        <Button variant="outlined" onClick={handleOpen}>
          Dodaj pizze
        </Button>
        <Modal open={open} handleClose={handleClose}>
          <PizzaForm pizza={pizza} setPizza={setPizza} onSave={handleAdd} />
        </Modal>
      </div>
      <div style={{ width: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nazwa</TableCell>
              <TableCell>Cena</TableCell>
              <TableCell>Opis</TableCell>
              <TableCell align="center">Guzik</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pizzas ? (
              pizzas.map((item) => (
                <Pizza
                  key={item.id}
                  pizza={item}
                  setPizza={setPizza}
                  pizzas={pizzas}
                  setPizzas={setPizzas}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No pizzas were found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
