import React from 'react';
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Belive In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            aut aliquam animi. Totam doloremque, accusamus eos hic enim
            exercitationem corrupti eius nisi praesentium esse blanditiis! Iure
            fuga modi nesciunt consectetur recusandae? Sint aut vel doloremque
            quo possimus eaque, nisi vero?
          </p>
        </div>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sing" />
      </div>
    </div>
  </div>
);

export default Chef;
