import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/search.png'


function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `https://example.com/search?q=${query}`;
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex ml-lg-2">
      <FormControl type="text" value={query} onChange={handleChange} />
      <Button variant="white" size="sm"><img src={logo} width='20' height='20'/></Button>
    </Form>
  );
}

export default SearchBar;
