import ExcerciseTable from "../features/excercises/ExcerciseTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import AddExcercise from "../features/excercises/AddExcercise";
import ExcerciseTableOperations from "../features/excercises/ExcerciseTableOperations";

function Excercises() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Excercises</Heading>
        <ExcerciseTableOperations />
      </Row>

      <Row>
        <ExcerciseTable />

        <AddExcercise />
      </Row>
    </>
  );
}

export default Excercises;
