import React from "react";
import butterfly from "../../assests/img/kelebek.jpg";

const Image = () => {
  return (
    <div>
      <img src="assets/img/kel.jpg" alt="" width="300" />
      <img
        src="https://images.pexels.com/photos/16307711/pexels-photo-16307711/free-photo-of-peyzaj-col-corak-cabrio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width="300"
        alt=""
      />

      <img src={butterfly} alt="" width="300" />

      <img src={require("../../assests/img/kelebek.jpg")} alt="" width="300" />
    </div>
  );
};

export default Image;
