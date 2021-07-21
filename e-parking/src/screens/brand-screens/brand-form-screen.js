import React from "react";
import Container from "../../components/container";
import Separator from "../../components/separator";
import Input from "../../components/input";
import Button from "../../components/button";
import { useToast } from "../../components/toast";
import { useHistory, useParams, Link } from "react-router-dom";
import Label from "../../components/label";
import saveBrandService from "../../services/brand-services/save-brand-service";
import getBrandsIdService from "../../services/brand-services/get-brand-id-service";
import useForm from "../../hooks/use-form";

const BrandFormScreen = () => {
  const { notify } = useToast();
  const { goBack } = useHistory();
  const { id } = useParams();

  const { getValue, setValue, submit } = useForm({
    initialValues: {},
    onSubmit: ({ brand }) => {
      const { id, name } = brand;
      const message = id
        ? `${name} successfully edited`
        : ` ${name} successfully added`;

      saveBrandService({ name, id }).then(() => {
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
      getBrandsIdService({ id }).then((data) => {
        setValue("brand", data)
      });
    }
  }, [id]);

  return (
    <Container>
      <h1>{id ? "Edit brand" : "New Brand"}</h1>
      <Separator />
      <div>
        <Label htmlFor="id">
          <b>ID</b>
        </Label>
      </div>
      <Separator />
      <form
        onSubmit={submit}
      >
        <Input id="id" disabled value={getValue("brand.id")} />
        <Separator />
        <Label htmlFor="name">
          <b>{id ? `Rename brand: ${"brand.name"}` : "Brand Name"}</b>
        </Label>
        <Separator />
        <Input
          id="name"
          value={getValue("brand.name")}
          onChange={(value) => setValue("brand.name", value)}
          required
        />
        <Separator />
        <Input type="submit" value="Save brand" />
        <Link to="/brands">
          <Button size="lg" style={{ margin: "1em" }} intent="danger">
            Cancel
          </Button>
        </Link>
      </form>
      <Separator size="xl" />
      <Separator size="xl" />
      <Separator size="xl" />
      <Separator size="md" />
      <Separator size="xl" />
      <Separator size="xl" />
    </Container>
  );
};

export default BrandFormScreen;
