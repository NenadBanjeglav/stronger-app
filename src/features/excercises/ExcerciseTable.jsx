import Spinner from "../../ui/Spinner";
import ExcerciseRow from "./ExcerciseRow";
import { useExcercise } from "./useExcercise";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function ExcerciseTable() {
  const { isLoading, excercises } = useExcercise();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!excercises.length) <Empty resourceName="excercises" />;

  const filterValue = searchParams.get("body-part") || "all";
  const typeValue = searchParams.get("type") || "";

  let filteredExcercises;

  if (filterValue == "all") filteredExcercises = excercises;

  if (filterValue == "full-body")
    filteredExcercises = excercises.filter(
      (excercise) => excercise.primeMover === "full-body"
    );

  if (filterValue == "legs")
    filteredExcercises = excercises.filter(
      (excercise) => excercise.primeMover === "legs"
    );

  if (filterValue == "chest")
    filteredExcercises = excercises.filter(
      (excercise) => excercise.primeMover === "chest"
    );

  if (filterValue == "back")
    filteredExcercises = excercises.filter(
      (excercise) => excercise.primeMover === "back"
    );

  if (filterValue == "arms")
    filteredExcercises = excercises.filter(
      (excercise) => excercise.primeMover === "arms"
    );

  if (filterValue == "core")
    filteredExcercises = excercises.filter(
      (excercise) => excercise.primeMover === "core"
    );

  if (filterValue == "shoulders")
    filteredExcercises = excercises.filter(
      (excercise) => excercise.primeMover === "shoulders"
    );

  if (typeValue !== "") {
    filteredExcercises = filteredExcercises.filter(
      (el) => el.type === typeValue
    );
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 0.5fr">
        <Table.Header>
          <div></div>
          <div>Excercise</div>
          <div>Type</div>
          <div>Body Part</div>
          <div>Compound</div>
        </Table.Header>

        <Table.Body
          data={filteredExcercises}
          render={(excercise) => (
            <ExcerciseRow excercise={excercise} key={excercise.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ExcerciseTable;
