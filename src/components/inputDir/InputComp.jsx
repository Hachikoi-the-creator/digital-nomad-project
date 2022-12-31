import { useRef } from "react";
import { InputWrapper } from "./inputStyles";
import { validate } from "../../utils/inputHelpers";

export default function InputComp(props) {
  const { type, name, label, setInputStates, inputStates } = props;
  const inputRef = useRef(null);
  const styleValid = inputStates[`${name}Valid`];

  const updateState = () => {
    const invalidKey = `${name}Valid`;
    const value = inputRef.current.value;

    // if input is invalid, update state, and add invalid
    // if input is VALID, update state, and add valid
    const isInputValid = validate(name, inputRef.current.value);

    setInputStates((prev) => ({
      ...prev,
      [invalidKey]: isInputValid,
      [name]: value,
    }));
  };

  return (
    <InputWrapper>
      <label className="label">
        <input
          className={`label__field  ${!styleValid && "invalid-input"}`}
          type={type}
          name={name}
          placeholder=" "
          ref={inputRef}
          onBlur={updateState}
        />
        <span className="label__span">{label}</span>
        {!styleValid && <span className="error__span"></span>}
      </label>
    </InputWrapper>
  );
}
