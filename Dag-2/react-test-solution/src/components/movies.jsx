import { useState } from 'react';

const Movies = () => {
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [checked, setChecked] = useState(false);
  const background = backgroundColor === 'red' ? 'orange' : 'red';

  return (
    <>
      <h1>Populära Filmer</h1>
      <button style={{ backgroundColor: backgroundColor }} onClick={() => setBackgroundColor(background)} disabled={checked}>
        Gör till favorit
      </button>
      <input
        type='checkbox'
        id='disable-button'
        defaultChecked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <label htmlFor='disable-button'>Avaktivera favorit knappen</label>
    </>
  );
};

export default Movies;
