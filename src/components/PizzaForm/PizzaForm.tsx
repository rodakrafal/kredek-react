import { Button, TextField } from "@mui/material";
import { IPizza } from "../../interfaces";

interface PizzaFormProps {
  pizza: IPizza;
  setPizza: React.Dispatch<React.SetStateAction<IPizza>>;
  onSave: () => void;
}

export const PizzaForm: React.FC<PizzaFormProps> = ({
  pizza,
  setPizza,
  onSave,
}) => {
  const handleChange =
    (prop: keyof IPizza) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setPizza({ ...pizza, [prop]: event.target.value });
    };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <TextField
        label="Pizza name"
        id="pizza-name"
        sx={{ m: 1, width: "80%", minWidth: "320px" }}
        onChange={handleChange("name")}
        value={pizza.name}
      />
      <TextField
        label="Pizza price"
        type="number"
        id="pizza-price"
        sx={{ m: 1, width: "80%", minWidth: "320px" }}
        onChange={handleChange("price")}
        value={pizza.price}
      />
      <TextField
        label="Pizza description"
        id="pizza-description"
        sx={{ m: 1, width: "80%", minWidth: "320px" }}
        onChange={handleChange("description")}
        value={pizza.description}
      />
      <TextField
        label="Pizza image"
        id="pizza-image"
        sx={{ m: 1, width: "80%", minWidth: "320px" }}
        onChange={handleChange("image")}
        value={pizza.image}
      />
      <Button onClick={onSave}>Zapisz</Button>
    </div>
  );
};
