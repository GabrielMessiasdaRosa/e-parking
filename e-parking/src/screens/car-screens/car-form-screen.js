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
import useForm from "../../hooks/use-form";

const CarFormScreen = () => {
  const { notify } = useToast();
  const { goBack } = useHistory();
  const [selectedBrand, setSelectedBrand] = React.useState();
  const { id } = useParams();
  const { getValue, setValue, submit } = useForm({
    initialValues: {},
    onSubmit: ({ car }) => {
      const {
        id,
        name,
        plate,
        color,
        brandName = selectedBrand.name,
        brandId = selectedBrand.id,
      } = car;
      const message = id
        ? `${name} successfully edited`
        : ` ${name} successfully added`;
      console.log(brandId);
      saveCarService({
        id,
        name,
        plate,
        color,
        brandId,
        brandName,
      }).then(() => {
        notify({
          intent: "success",
          message,
        });
        goBack();
      });
    },
  });

  React.useEffect(() => {
    if (id) {
      getCarsIdService({ id }).then((data) => {
        setValue("cars", data);
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

      <form onSubmit={submit}>
        <Input id="id" disabled value={getValue("car.id")} />
        <Separator />
        <Label htmlFor="selectBrand">
          <b>Select a Brand</b>
        </Label>
        <Separator />

        <SelectBrand
          id="selectBrand"
          value={getValue("car.brandName")}
          onChange={(brand) => setValue(setSelectedBrand(brand))}
        />
        <Separator />
        <Label htmlFor="name">
          <b>{id ? `Rename car: ${getValue("car.name")}` : "Car Name"}</b>
        </Label>
        <Separator />
        <Input
          id="name"
          value={getValue("car.name")}
          onChange={(value) => setValue("car.name", value)}
          required
        />
        <Separator />
        <Separator />
        <Label htmlFor="plate">
          <b>{id ? `Edit Plate: ${getValue("car.plate")}` : "Lisence Plate"}</b>
        </Label>
        <Separator />
        <Input
          style={{}}
          id="name"
          value={getValue("car.plate")}
          onChange={(value) => setValue("car.plate", value)}
          required
        />
        <Separator />
        <Separator />
        <Label htmlFor="plate">
          <b>{id ? `Edit color: ${getValue("car.color")}` : "Set Color"}</b>
        </Label>
        <Separator />
        <Input
          id="name"
          value={getValue("car.color")}
          onChange={(value) => setValue("car.color", value)}
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
