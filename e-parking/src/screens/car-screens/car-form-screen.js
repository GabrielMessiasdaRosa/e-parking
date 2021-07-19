import React from "react";
import Container from "../../components/container";
import Separator from "../../components/separator";
import Input from "../../components/input";
import { useToast } from "../../components/toast";
import { Link, useHistory, useParams } from "react-router-dom";
import Label from "../../components/label";
import saveCarService from "../../services/car-services/save-car-service";
import getCarsIdService from "../../services/car-services/get-car-id-service";
import Button from "../../components/button";
import SelectBrand from "../../components/select-brand";
const CarFormScreen = () => {
  const [carId, setCarId] = React.useState();
  const [carName, setCarName] = React.useState("");
  const [carLisencePlate, setCarLisencePlate] = React.useState("");
  const [carColor, setCarColor] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();
  const [selectedBrand, setSelectedBrand] = React.useState(null);
  const { id } = useParams();

  const saveCar = () => {
    const message = id
      ? `${carName} successfully edited`
      : ` ${carName} successfully added`;

    saveCarService({
      name: carName,
      id,
      color: carColor,
      plate: carLisencePlate,
    }).then(() => {
      notify({
        intent: "success",
        message,
      });
      setCarName("");
      goBack();
    });
  };

  React.useEffect(() => {
    if (id) {
      getCarsIdService({ id }).then((data) => {
        setCarId(data.id);
        setCarName(data.name);
      });
    }
  }, [id]);

  return (
    <Container>
      <h1>{id ? "Edit car" : "New car"}</h1>
      <Separator />
      <div>
        <Label htmlFor="id">
          <b>ID</b>
        </Label>
      </div>
      <Separator />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          saveCar();
        }}
      >
        <Input id="id" disabled value={carId} />
        <Separator />
        <Label htmlFor="selectBrand">
          <b>Select a Brand</b>
        </Label>
        <Separator/>
        <SelectBrand
        id="selectBrand"
          value={selectedBrand?.id}
          onChange={(brand) => setSelectedBrand(brand)}
        />
        <Separator />
        <Label htmlFor="name">
          <b>{id ? `Rename car: ${carName}` : "Car Name"}</b>
        </Label>
        <Separator />
        <Input
          id="name"
          value={carName.toUpperCase()}
          onChange={(value) => setCarName(value)}
          required
        />
        <Separator />
        <Separator />
        <Label htmlFor="plate">
          <b>{id ? `Edit Plate: ${carLisencePlate}` : "Lisence Plate"}</b>
        </Label>
        <Separator />
        <Input
          style={{}}
          id="name"
          value={carLisencePlate.toUpperCase()}
          onChange={(value) => setCarLisencePlate(value)}
          required
        />
        <Separator />
        <Separator />
        <Label htmlFor="plate">
          <b>{id ? `Edit color: ${carColor}` : "Set Color"}</b>
        </Label>
        <Separator />
        <Input
          id="name"
          value={carColor.toUpperCase()}
          onChange={(value) => setCarColor(value)}
          required
        />
        <Separator />
        <Input type="submit" value="Save Car" />
        <Link to="/cars">
          <Button size="lg" style={{ margin: "1em" }} intent="danger">
            Cancel
          </Button>
        </Link>
      </form>
    </Container>
  );
};

export default CarFormScreen;
