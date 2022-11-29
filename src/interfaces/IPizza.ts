export interface IPizza {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  ordes?: any;
}

export const emptyPizza: IPizza = {
  id: -1,
  name: "",
  price: 0,
  description: "",
  image: "",
};
