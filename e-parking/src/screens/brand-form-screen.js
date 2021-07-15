import React from "react";
import Container from "../components/container";
import Separator from "../components/separator";
import Input from "../components/input";
import Button from "../components/button";
import { useToast } from "../components/toast";
import { useHistory, useParams } from "react-router-dom";
import Label from "../components/label";
import saveBrandService from "../services/save-brand-service";
import getBrandsIdService from "../services/get-brand-id-service";
const BrandFormScreen = () => {
  const [brandId, setBrandId] = React.useState();
  const [brandName, setBrandName] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  const saveBrand = () => {
    const message = id
      ? `${brandName} successfully edited`
      : ` ${brandName} successfully added`;

    saveBrandService({name: brandName, id}).then(() => {
      notify({
        intent: "success",
        message,
      });
      setBrandName("");
      goBack();
    });
  };

  React.useEffect(() => {
    if (id) {
      getBrandsIdService({id}).then((data) => {
          setBrandId(data.id);
          setBrandName(data.name);
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
        onSubmit={(event) => {
          event.preventDefault();
          saveBrand();
        }}
      >
        <Input id="id" disabled value={brandId} />
        <Separator />
        <Label htmlFor="name">
          <b>Brand Name</b>
        </Label>
        <Separator />
        <Input
          id="name"
          value={brandName}
          onChange={(value) => setBrandName(value)}
          required
        />
        <Separator />
        <Input type="submit" value="Save brand"/>
      </form>
    </Container>
  );
};

export default BrandFormScreen;