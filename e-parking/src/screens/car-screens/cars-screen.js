import React from "react";
import Table from "../../components/table";
import Separator from "../../components/separator";
import Button from "../../components/button";
import Container from "../../components/container";
import Modal from "../../components/modal";
import { Link } from "react-router-dom";
import DeleteCarConfirmationModal from "../../components/delete-cars-confirmation-modal";
import getCarsService from "../../services/car-services/get-car-service";
import Input from "../../components/input";
import Label from "../../components/label";
import SelectBrand from "../../components/select-brand";
import useBrands from "../../hooks/use-brands-hooks";

const CarsScreen = () => {
  const [cars, setcars] = React.useState([]);
  const [deletingCar, setDeletingCar] = React.useState();
  const [selectedBrand, setSelectedBrand] = React.useState("");
  const [search, setSeach] = React.useState("");
  const { brands, loadBrands } = useBrands();
  const brandId = selectedBrand?.id;

  const getCars = () => {
    getCarsService().then((data) => {
      setcars(data);
    });
  };
  const filteredCars = cars.filter(
    (car) =>
      car.name.startsWith(search) ||
      car.brandName.startsWith(search) ||
      car.plate.startsWith(search) ||
      car.color.startsWith(search)
  );
  const onRequestClose = () => {
    setDeletingCar(undefined);
  };
  console.log(selectedBrand.name)
  useBrands(brands);

  React.useEffect(() => {
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
        <Input
          id="searchCar"
          placeholder="Golf GTI"
          value={search}
          onChange={(value) => setSeach(value)}
        ></Input>
        <Label>Select a Brand:</Label>
        <SelectBrand
          value={brandId}
          onChange={(brand) => setSelectedBrand(brand)}
        />
        {/*perguntar como funciona*/}
        <Link to="/car/new">
          <Button size="lg" intent="info" img="addIcoWhite">
            Add new Car
          </Button>
        </Link>
      </div>
      <Separator />
      <Table
        data={filteredCars}
        columns={[
          { path: "plate", label: "Lisence Plate", width: "25%" },
          { path: "color", label: "Color", width: "25%" },
          { path: "brandName", label: "Brand", width: "25%" },
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
                    loadBrands();
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
