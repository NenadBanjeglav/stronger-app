import Heading from "../ui/Heading";
import Row from "../ui/Row";
import WorkoutTable from "../features/workouts/WorkoutTable";

import AddWorkout from "../features/workouts/AddWorkout";

function Workouts() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Workouts</Heading>

        <p>TEST</p>
      </Row>
      <AddWorkout />
      <WorkoutTable />
    </>
  );
}

export default Workouts;
