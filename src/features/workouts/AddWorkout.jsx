import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddWorkout() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <Button>Add new workout</Button>
        </Modal.Open>
        <Modal.Window>{/* <CreateWorkoutForm /> */}</Modal.Window>
      </Modal>
    </div>
  );
}

export default AddWorkout;
