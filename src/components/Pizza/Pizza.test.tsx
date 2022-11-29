import { Table, TableBody } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { Pizza } from ".";
import { IPizza } from "../../interfaces";

describe("Pizza", () => {
  const pizza: IPizza = {
    id: 1,
    name: "Pizza",
    price: 10,
    description: "Pizza description",
    image: "Pizza image",
  };

  it("renders pizza item", () => {
    render(
      <Table>
        <TableBody>
          <Pizza
            pizza={pizza}
            setPizza={() => {}}
            pizzas={[pizza]}
            setPizzas={() => {}}
          />
        </TableBody>
      </Table>
    );
    const pizzaElement = screen.getByTestId("test-pizza");
    expect(pizzaElement).toBeInTheDocument();
  });
});
