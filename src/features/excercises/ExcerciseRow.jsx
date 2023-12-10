/* eslint-disable react/prop-types */
import styled from "styled-components";
import CreateExcerciseForm from "./CreateExcerciseForm";
import { useDeleteExcercise } from "./useDeleteExcercise";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateExcercise } from "./useCreateExcercise";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  object-fit: cover;
  object-position: center;
`;

const Excercise = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const BodyPart = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const PrimeMover = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-brand-500);
`;

const Compound = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function ExcerciseRow({ excercise }) {
  const { isDeleting, deleteExcercise } = useDeleteExcercise();

  const { createExcercise } = useCreateExcercise();

  const {
    id: excerciseId,
    name,
    primeMover,
    image,
    isCompound,
    type,
  } = excercise;

  function handleDuplicate() {
    createExcercise({
      name: `Copy of ${name}`,
      primeMover,
      image,
      isCompound,
      type,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Excercise>{name}</Excercise>
      <BodyPart>{type}</BodyPart>
      <PrimeMover>{primeMover}</PrimeMover>
      <Compound>
        <span style={{ color: isCompound ? "green" : "orange" }}>
          {isCompound ? "Yes" : "No"}
        </span>
      </Compound>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={excerciseId} />

            <Menus.List id={excerciseId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateExcerciseForm excerciseToEdit={excercise} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={"excercise"}
                disabled={isDeleting}
                onConfirm={() => deleteExcercise(excerciseId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ExcerciseRow;
