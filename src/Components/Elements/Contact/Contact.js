import React, { useState } from "react";
import "./Contact.css";
import Card from "../../UI/Card/Card"
// import Button from "../../UI/Button/Button";

// import ContactForm from "./ContactForm/ContactForm";


const Contact = () => {
 
  const [state, setState] = useState(true);
  
 

  let LIurl = "https://linkedin.com/in/raymond-flaherty-07b2011bb";
  let linkedInElement = <p>No handle exists for this user!</p>;
  if (state) linkedInElement = <a href={LIurl}>LinkedIn</a>;

  let GitHubLink = "https://github.com/RayFlaherty";
  let GitHubEl = <p>Link</p>;
  if (state) GitHubEl = <a href={GitHubLink}>Git Hub</a>;

  let FaceBookLink = "https://www.facebook.com/raymond.flahertyiv";
  let FacebookEl = <p>Link</p>;
  if (state) FacebookEl = <a href={FaceBookLink}>Facebook</a>;

  let InstagramLink = "https://www.instagram.com/raymondf.flaherty/";
  let InstagramEl = <p>Link</p>;
  if (state) InstagramEl = <a href={InstagramLink}>Instagram</a>;

  return (
    <div>
   
      <Card>
        <div className="header h1Text">
          <h2> Contact Info </h2>
          <p>
            Please take time and enjoy exploring my social media links and add me! Don't
            forget to use the contact form and send a quick shout out.
          </p>
          <div className=" contactRow">

            {/* Comment Out Contact Form for future functionality*/}

            {/* <ContactForm /> */}

            <Card className="contactStyle">
              <div>
                <h2>FIND ME!</h2>
              </div>
              <div className="contactRow">
                <ul className="contactRow">
                  <li className="">{linkedInElement}</li>
                  <li className="">{GitHubEl}</li>
                  <li className="">{FacebookEl}</li>
                  <li>{InstagramEl}</li>
                </ul>
              </div>
            </Card>
          </div>
          {/* <Button>Back To Top</Button> */}
        </div>
      </Card>
    </div>
  );
};

export default Contact;
