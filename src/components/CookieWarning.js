import React, { useState } from 'react';

function CookieWarning() {
  const [agreed, setAgreed] = useState(false);

  if (agreed) {
    return null;
  }
  return (
    <div
      style={{
        backgroundColor: 'orangered',
        width: '100vw',
        padding: 60,
        position: 'fixed',
        bottom: 0,
        color: 'white',
      }}
    >
      We have cookies. You have to agree!
      <br />
      <button className="btn btn-outline-warning" onClick={() => setAgreed(true)}>
        <h4>Agree!</h4>
      </button>
    </div>
  );
}

export default CookieWarning;
