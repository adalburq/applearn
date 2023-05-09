import React from 'react';

function Hooks08() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Count: {count}

      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
    </div>
  );
}

export default Hooks08;