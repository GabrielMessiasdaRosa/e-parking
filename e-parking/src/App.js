import React from "react";
import "./App.css";
import Button from "./components/button";
import Separator from "./components/separator";
import Table from "./components/table";





function App() {
  const [deletingCar, setDeletingCar] = React.useState();
  const [car, setCar] = React.useState([
    { id: 1, licensePlate: "DGF-8006", color: "black", brand: "Fiat" },
    { id: 2, licensePlate: "DGF-8006", color: "white", brand: "FORD" },
    { id: 3, licensePlate: "DGF-8006", color: "green", brand: "Fiat" },
    { id: 4, licensePlate: "DGF-8006", color: "grey", brand: "Fiat" },
  ]);

  // teste da table
  const columns = [
    { path: "licensePlate", label: "License Plate" },
    { path: "color", label: "Color" },
    { path: "brand", label: "Brand" },
    {
      path: "actions",
      label: "Options",
      render: ({ rowData, index }) => {
        return (
          <div>
            <Button index={index} >
              Edit
            </Button>
            <Button
              index={index}
              intent="danger"
              onClick={() => 
                alert("Deletou")}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  // teste do Select
  const [selectedBrand, setSelectedBrand] = React.useState(0);
  const brands = [
    { id: 0, name: "Select a brand" },
    { id: 1, name: "BMW" },
    { id: 2, name: "Tesla" },
    { id: 3, name: "Ford" },
    { id: 4, name: "Peugeot" },
    { id: 5, name: "Fiat" },
    { id: 6, name: "Suzuki" },
    { id: 7, name: "Nissan" },
  ];
  const options = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  //retorno sendo renderizado
  return (
    <div className="App">
    <Separator size="xl"></Separator>
      <Table data={car} columns={columns}></Table>
    </div>
  );
}

export default App;
