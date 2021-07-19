import deleteCarService from "../services/car-services/delete-car-service";
import Button from "./button";
import Separator from "./separator";
import { useToast } from "./toast";
import Text from "./text";
const DeleteCarConfirmationModal = ({ cars, onCancel, onSuccess }) => {
  const { notify } = useToast();

  const deleteCar = () => {
    deleteCarService({ id: cars.id }).then(() => {
      notify({
        intent: "success",
        message: `Car ${cars.name} successfully deleted `,
      });
      onSuccess();
    });
  };
  return (
    <>
      <h3>{cars.name}</h3>
      <Text>Are you sure you want to delete {cars.name}?</Text>
      <Separator />
      <div style={{ display: "flex" }}>
        <Button intent="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <Separator />
        <Button
          intent="danger"
          onClick={() => {
            deleteCar();
          }}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default DeleteCarConfirmationModal;
