import SetInfo from "./SetInfo";

import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";

import { useSets } from "./useSets";
import styled from "styled-components";

import { HiTrash } from "react-icons/hi2";
import { useDeleteWorkout } from "./useDeleteWorkout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

/* eslint-disable react/prop-types */

const StyledTableRowDate = styled.tr`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  border-top: 1px solid var(--color-grey-200);

  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.td`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;

    color: var(--color-grey-500);
  }
`;

function WorkoutInfo({ workout }) {
  const { id, created_at } = workout;
  const { sets, isLoading } = useSets(id);
  const { isDeleting, deleteWorkout } = useDeleteWorkout();

  const date = new Date(created_at);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  if (isLoading) return <Spinner />;
  if (!sets.length) return <Empty resourceName={"sets"} />;

  return (
    <Modal>
      <StyledTableRowDate>
        <td colSpan="3">{formattedDate}</td>
        <Modal.Open opens="delete">
          <StyledButton role="button" as="td">
            <HiTrash />
          </StyledButton>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName={"workout"}
            disabled={isDeleting}
            onConfirm={() => deleteWorkout(id)}
          />
        </Modal.Window>
      </StyledTableRowDate>
      {sets.map((set) => (
        <SetInfo key={set.id} set={set} />
      ))}
    </Modal>
  );
}

export default WorkoutInfo;
