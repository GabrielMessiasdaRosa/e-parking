import React from "react";
import Table from "../../components/table";
import Separator from "../../components/separator";
import Button from "../../components/button";
import Container from "../../components/container";
import Modal from "../../components/modal";
import { Link } from "react-router-dom";
import DeleteBrandConfirmationModal from "../../components/delete-brand-confirmation-modal copy";
import getBrandsService from "../../services/brand-services/get-brands-service";

const BrandsScreen = () => {
  const [brands, setBrands] = React.useState([]);
  const [deletingBrand, setDeletingBrand] = React.useState();

  const getBrands = () => {
    getBrandsService().then((data) => {
      setBrands(data);
    });
  };

  React.useEffect(() => {
    getBrands();
  }, []);

  const onRequestClose = () => {
    setDeletingBrand(undefined);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Brands</h1>
        <Link to="/brands/new">
          <Button size="lg" intent="info" img="addIcoWhite">
            Add new brand
          </Button>
        </Link>
      </div>
      <Separator />
      <Table
        data={brands}
        columns={[
          { path: "id", label: "#", width: "5%" },
          { path: "name", label: "Brands", width: "75%" },
          {
            path: "",
            label: "Options",
            width: "5%",

            render: ({ rowData }) => (
              <div style={{ display: "flex" }}>
                <Link to={`/brands/${rowData.id}`}>
                  <Button size="sm">Edit</Button>
                </Link>
                <Separator size="sm" />
                <Button
                  intent="danger"
                  size="sm"
                  onClick={() => {
                    setDeletingBrand(rowData);
                  }}
                >
                  delete
                </Button>
              </div>
            ),
          },
        ]}
      />
      <Modal
        visible={!!deletingBrand}
        onRequestClose={() => {
          onRequestClose();
        }}
      >
        {deletingBrand ? (
          <DeleteBrandConfirmationModal
            brand={deletingBrand}
            onCancel={() => onRequestClose()}
            onSuccess={() => {
              getBrands();
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

export default BrandsScreen;
