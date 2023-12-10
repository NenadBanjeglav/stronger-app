/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || "";

  function handleChange(e) {
    searchParams.set("type", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      value={type}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
