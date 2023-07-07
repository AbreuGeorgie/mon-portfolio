import Form from 'react-bootstrap/Form';

function Filter() {
  return (
    <Form>
    {["radio"].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="Frontend"
          name="Filter"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="Backend"
          name="Filter"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          label="Gestion de projet"
          name="Filter"
          type={type}
          id={`inline-${type}-3`}
        />
      </div>
    ))}
  </Form>
  );
}

export default Filter;