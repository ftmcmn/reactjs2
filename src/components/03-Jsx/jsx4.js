import React from "react";

const Jsx4 = () => {
  const yas = 18;
  return (
    <div>
      {yas >= 18 && <h2>ehliyet alabilir</h2>}
      {yas < 18 || <h2>ehliyet alamaz</h2>}
    </div>
  );
};

export default Jsx4;
