import React from "react";
import Container from "../components/container";
import Separator from "../components/separator";
import Input from "../components/input";
import Button from "../components/button";
import { useToast } from "../components/toast";
import { useHistory, useParams } from "react-router-dom";
import Label from "../components/label";
const BrandFormScreen = () => {
  const [brandId, setBrandId] = React.useState();
  const [brandName, setBrandName] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  const saveBrand = () => {
    const url = id
      ? `http://localhost:8080/brands/${id}`
      : "http://localhost:8080/brands";

    const method = id ? "PUT" : "POST";

    const message = id
      ? `${brandName} successfully edited`
      : ` ${brandName} successfully added`;

    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method,
      body: JSON.stringify({ name: brandName }),
    }).then(() => {
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
      fetch(`http://localhost:8080/brands/${id}`).then((response) => {
        response.json().then((data) => {
          setBrandId(data.id);
          setBrandName(data.name);
        });
      });
    }
  }, [id]);

  return (
    <Container>
      <h1>{id ? "Edit brand" : "New Brand"}</h1>
      <Separator />
      <Label htmlFor="id">
        <b>ID</b>
      </Label>
      <Separator />
      <form
        style={{ maxWidth: 500 }}
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
        <Button>Save</Button>
      </form>
    </Container>
  );
};

export default BrandFormScreen;