import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = () => console.log(input);

  return (
    <div>
      <h1>StreamList</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a movie or show"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default StreamList;
