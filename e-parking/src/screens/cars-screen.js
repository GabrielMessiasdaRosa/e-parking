import React from "react";
import Table from "../components/table";
import Separator from "../components/separator";
import Button from "../components/button";
import Container from "../components/container";
import Modal from "../components/modal";
import { Link } from "react-router-dom";
import DeleteCarConfirmationModal from "../components/delete-cars-confirmation-modal";
import getCarsService from "../services/get-car-service";
import Select from "../components/select";
import Input from "../components/input";
import getBrandsService from "../services/get-brands-service";
import Label from "../components/label";
const CarsScreen = () => {
  const [cars, setcars] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [deletingCar, setDeletingCar] = React.useState();

  const getCars = () => {
    getCarsService().then((data) => {
      setcars(data);
    });
  };

  const onRequestClose = () => {
    setDeletingCar(undefined);
  };

  const getBrands = () => {
    getBrandsService().then((data) => {
      setBrands(data);
    });
  };

  React.useEffect(() => {
    getBrands();
    getCars();
  }, []);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Cars</h1>
        <Label htmlFor="searchCar">Search car</Label>
        <Input id="searchCar" placeholder="Golf GTI"></Input>
        <Select options={brands}></Select> {/*perguntar como funciona*/}
        <Link to="/car/new">
          <Button size="lg" intent="info" img="addIcoWhite">
            Add new Car
          </Button>
        </Link>
      </div>
      <Separator />
      <Table
        data={cars}
        columns={[
          { path: "id", label: "#", width: "25%" },
          { path: "plate", label: "Lisence Plate", width: "25%" },
          { path: "color", label: "Color", width: "25%" },
          { path: "name", label: "Car Model", width: "25%" },
          {
            path: "",
            label: "Options",
            width: "5%",

            render: ({ rowData }) => (
              <div style={{ display: "flex" }}>
                <Link to={`/cars/${rowData.id}`}>
                  <Button size="sm">Edit</Button>
                </Link>
                <Separator size="sm" />
                <Button
                  intent="danger"
                  size="sm"
                  onClick={() => {
                    setDeletingCar(rowData);
                  }}
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
      />
      <Modal
        visible={!!deletingCar}
        onRequestClose={() => {
          onRequestClose();
        }}
      >
        {deletingCar ? (
          <DeleteCarConfirmationModal
            cars={deletingCar}
            onCancel={() => onRequestClose()}
            onSuccess={() => {
              getCars();
              onRequestClose();
            }}
          />
        ) : null}
      </Modal>
      <Separator size="xl" />
      <Separator size="xl" />
      <Separator size="xl" />
      <Separator size="xl" />
      <Separator size="md" />
      <Separator size="xl" />
      <Separator size="xl" />
    </Container>
  );
};

export default CarsScreen;
