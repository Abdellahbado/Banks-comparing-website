import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function MyForm({ onSubmit }) {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const handleSubmit = (event) => {
    // code when the form is submited
    event.preventDefault();
    onSubmit(minValue, maxValue);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>La valeur min</Form.Label>
        <Form.Control
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>La valeur max</Form.Label>
        <Form.Control
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default MyForm;
