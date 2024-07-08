import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div>
      <ClipLoader
        color="blue"
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
