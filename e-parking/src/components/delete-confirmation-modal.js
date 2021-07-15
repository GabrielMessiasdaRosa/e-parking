import deleteBrandService from "../services/delete-brand-service";
import Button from "./button";
import Separator from "./separator";
import { useToast } from "./toast";

const DeleteConfirmationModal = ({ brand, onCancel, onSuccess }) => {
  const { notify } = useToast();

  const deleteBrand = () => {
    deleteBrandService({ id: brand.id }).then(() => {
      notify({
        intent: "success",
        message: `Brand ${brand.name} successfully deleted `,
      });
      onSuccess();
    });
  };
  return (
    <>
      <h3>{brand.name}</h3>
      <p>Are you sure you want to delete{brand.name}?</p>
      <Separator />
      <div style={{ display: "flex" }}>
        <Button intent="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <Separator />
        <Button
          intent="danger"
          onClick={() => {
            deleteBrand();
          }}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default DeleteConfirmationModal;
