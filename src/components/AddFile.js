import React, { useState } from "react";

const AddFile = () => {
  const [AddField, setAddField] = useState([]);

  const handleAddField = () => {
    const newField = {
      id: new Date().getTime(),
      value: "",
    };
    setAddField([...AddField, newField]);
  };

  const deleteField = (id) => {
    const updatedField = AddField.filter((item) => item.id !== id);
    setAddField(updatedField);
  };

  const handleInputChange = (id, value) => {
    const updatedField = AddField.map((val) => {
      if (val.id === id) {
        return { ...AddField, value };
      }
      return AddField;
    });
    setAddField(updatedField);
  };

  return (
    <div>
      {AddField.length === 0 ? (
        <p>No fields in the form</p>
      ) : (
        AddField.map((field) => (
          <div key={field.id}>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />
            <button className="delete" onClick={() => deleteField(field.id)}>
              Delete
            </button>
            <br />
          </div>
        ))
      )}

      <button className="add" onClick={handleAddField}>
        Add Field
      </button>
    </div>
  );
};

export default AddFile;