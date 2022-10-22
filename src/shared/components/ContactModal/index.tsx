import { useContext } from "react";

import { Context } from "../../../App";
import Input from "../../../shared/components/Input";

import close from "../../../shared/assets/icons/close.svg";
import send from "../../../shared/assets/icons/send.svg";

import { Container } from "./styles";

const Contact = () => {
  const { setHasContactModal } = useContext(Context);

  return (
    <Container>
      <div className="content">
        <div className="box">
          <div className="close-button">
            <button className="close">
              <img src={close} alt="" />
            </button>
          </div>

          <form action="" className="form">
            <h1>Contact</h1>

            <div className="field">
              <label htmlFor="name">Name</label>
              <Input name="name" id="name" placeholder="Fill your full name" />
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Fill a valid  e-mail"
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone</label>
              <Input name="phone" id="phone" placeholder="Fill your phone" />
            </div>

            <div className="field">
              <label htmlFor="post">Post</label>
              <textarea form="form" placeholder="Hello..."></textarea>
            </div>
          </form>

          <button className="send">
            <img src={send} alt="" />
            <p>Submit</p>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
