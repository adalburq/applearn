import React from 'react';

// from https://www.robinwieruch.de/react-preventdefault/

const COURSE_LIST = [
  'Learn React',
  'Learn Java',
  'Learn SQL',
];

const Hooks06 = () => {

  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(COURSE_LIST);
  //const onSubmit = data => console.log(data); 

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("event:", event);
    console.log("target:", event.target);
    console.log("type:", event.target.type);
    console.log("variavel value:", value);
    console.log("elemento html value:", event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("value1:", value)

    if (value) {
      console.log("value2:", value)
      setList(list.concat(value));
    }

    setValue('');

    event.preventDefault();
  };

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}  />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Hooks06;