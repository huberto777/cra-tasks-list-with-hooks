import React from "react";

function SearchTask({search}) {
  return (
      <div className="form-group mt-4">
        <input
          type="text"
          placeholder="search task"
          className="form-control"
          onInput={search}
        />
      </div>
  );
}
export default SearchTask;
