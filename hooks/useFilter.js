import { useState } from "react";

export default function useFilter() {
  const filters = [
    {
      label: "Show All",
      code: "SHOW_ALL",
    },
    {
      label: "Hide completed",
      code: "HIDE_ISDONE",
    },
  ];
  const [filter, setFilter] = useState(filters[0].code);
  const selectFilter = (ftr) => {
    setFilter(ftr);
  };

  const filteredList = (list) => {
    if (filter === "SHOW_ALL") return list;
    if (filter === "HIDE_ISDONE") return list.filter((i) => !i.isDone);

    return [];
  };
  return {
    filter,
    filteredList,
    selectFilter,
    filters,
  };
}
