import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateExcerciseForm from "./CreateExcerciseForm";

function AddExcercise() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="excercise-form">
          <Button>Add new excercise</Button>
        </Modal.Open>
        <Modal.Window name="excercise-form">
          <CreateExcerciseForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddExcercise;
