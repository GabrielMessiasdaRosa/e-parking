import React from "react";
import Container from "../../components/container";
import Separator from "../../components/separator";
import Input from "../../components/input";
import Button from "../../components/button";
import { useToast } from "../../components/toast";
import { useHistory, useParams,Link } from "react-router-dom";
import Label from "../../components/label";
import saveBrandService from "../../services/brand-services/save-brand-service"
import getBrandsIdService from "../../services/brand-services/get-brand-id-service";

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

    saveBrandService({ name: brandName, id }).then(() => {
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
      getBrandsIdService({ id }).then((data) => {
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
          <b>{id ? `Rename brand: ${brandName}` : "Brand Name"}</b>
        </Label>
        <Separator />
        <Input
          id="name"
          value={brandName}
          onChange={(value) => setBrandName(value)}
          required
        />
        <Separator />
        <Input type="submit" value="Save brand" />
        <Link to="/brands">
          <Button size="lg" style={{margin:"1em"}} intent="danger">Cancel</Button>
        </Link>
      </form>
      <Separator size="xl"/>
      <Separator size="xl"/>
      <Separator size="xl"/>
      <Separator size="md"/>
      <Separator size="xl"/>
      <Separator size="xl"/>
    </Container>
  );
};

export default BrandFormScreen;
