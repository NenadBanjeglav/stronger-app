import Empty from "../../ui/Empty";
import { useWorkouts } from "./useWorkouts";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import WorkoutInfo from "./WorkoutInfo";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const StyledHeader = styled.tr`
  display: flex;
  justify-content: space-around;
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

function WorkoutTable() {
  const { workouts, isLoading } = useWorkouts();

  if (isLoading) return <Spinner />;
  if (!workouts.length) return <Empty resourceName="workouts" />;

  return (
    <StyledTable role="table" as="table">
      <thead>
        <StyledHeader role="row" as="tr">
          <th>EXCERCISE</th>
          <th>REPETITIONS</th>
          <th>WEIGHT</th>
        </StyledHeader>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <WorkoutInfo workout={workout} key={workout.id}></WorkoutInfo>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default WorkoutTable;
