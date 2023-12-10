import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ExcerciseTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="body-part"
        options={[
          { value: "all", label: "All" },
          { value: "full-body", label: "Full Body" },
          { value: "legs", label: "Legs" },
          { value: "chest", label: "Chest" },
          { value: "back", label: "Back" },
          { value: "arms", label: "Arms" },
          { value: "shoulders", label: "Shoulders" },
          { value: "core", label: "Core" },
        ]}
      />

      <SortBy
        options={[
          { value: "", label: "All" },
          { value: "push", label: "Push" },
          { value: "pull", label: "Pull" },
          { value: "isolation", label: "Isolation" },
          { value: "anti-extension", label: "Anti-Extension" },
        ]}
      />
    </TableOperations>
  );
}

export default ExcerciseTableOperations;
