import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";
import Button from "./Button";
const Form = ({ inputText, setInputText, handleSubmit, className }) => {
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <div className={className}>
      <input
        onChange={inputChangeHandler}
        value={inputText}
        type="text"
        placeholder={"Search..."}
      />
      <Button
        text={<FontAwesomeIcon icon={["fas", "search"]} size="md" />}
        onClick={handleSubmit}
        className="search-button"
      />
    </div>
  );
};

export default Form;
