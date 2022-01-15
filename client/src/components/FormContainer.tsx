import { FC, ReactElement } from "react";
import { FormType } from "../types";
const FormContainer: FC<FormType> = ({ value, handleChange }): ReactElement => (
  <div className="form">
    <label>
      Number:
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter any positive Integer "
      />
    </label>
  </div>
);

export default FormContainer;
