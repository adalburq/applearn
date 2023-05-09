import React from 'react';

function Hooks07() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Count: {count}

      <button
        type="button"
        onClick={function(event) {
          setCount(count + 1);
          console.log('count:', count);
          console.log('value:', event.target);
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

export default Hooks07;