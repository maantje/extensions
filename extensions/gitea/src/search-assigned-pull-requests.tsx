import React from "react";
import { getPreferenceValues } from "@raycast/api";
import { SearchIssues } from "./components/commands/search-issues";

export default function Command() {
  const { defaultPullState } = getPreferenceValues();

  return (
    <SearchIssues
      searchBarPlaceholder="Search for pull requests, assigned to you"
      type="pulls"
      defaultState={defaultPullState}
      assigned
    />
  );
}
