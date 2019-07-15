import React from "react";
import Form from "react-bootstrap/Form";

function MySelect(props) {
  let options = props.options.map((option, key) => (
    <option key={key} value={props.values[key]}>
      {option}
    </option>
  ));
  return (
    <div>
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        as="select"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        {options}
      </Form.Control>
    </div>
  );
}

export default MySelect;
