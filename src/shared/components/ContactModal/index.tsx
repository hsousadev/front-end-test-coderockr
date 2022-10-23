import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormEvent, useContext, useState } from "react";

import { Context } from "../../../App";

import close from "../../../shared/assets/icons/close.svg";
import send from "../../../shared/assets/icons/send.svg";
import loading from "../../../shared/assets/icons/loading.svg";

import { Container } from "./styles";

const Contact = () => {
  const [alertToComplete, setAlertToComplete] = useState(false);
  const [okMessage, setOkMessage] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState<string>();

  const [emailWarning, setEmailWarning] = useState(false);
  const [nameWarning, setNameWarning] = useState(false);
  const [phoneWarning, setPhoneWarning] = useState(false);
  const [postWarning, setPostWarning] = useState(false);

  const [emailIsEmpty, setEmailIsEmpty] = useState(true);
  const [nameIsEmpty, setNameIsEmpty] = useState(true);
  const [phoneIsEmpty, setPhoneIsEmpty] = useState(true);
  const [postIsEmpty, setPostIsEmpty] = useState(true);

  const { setHasContactModal } = useContext(Context);

  function handleFullNameValidation(name: string) {
    if (name != "") {
      const re = /^[a-zA-Z ]+$/;
      const nameTest = re.test(String(name).toLowerCase());

      if (nameTest != true) {
        setNameWarning(true);
        setNameIsEmpty(true);

        return;
      } else {
        setNameWarning(false);
        setNameIsEmpty(false);
        return;
      }
    }
  }

  function handleEmailValidation(email: string) {
    if (email != "") {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailTest = re.test(String(email).toLowerCase());
      if (emailTest != true) {
        setEmailWarning(true);
        setEmailIsEmpty(true);

        return;
      } else {
        setEmailWarning(false);
        setEmailIsEmpty(false);

        return;
      }
    }
  }

  function handlePhoneValidation(phone: string) {
    const formatedPhone = phone
      .replaceAll(" ", "")
      .replace(/[^a-zA-Z0-9 ]/g, "");

    if (formatedPhone != "") {
      const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
      const phoneTest = re.test(String(formatedPhone).toLowerCase());

      if (phoneTest != true) {
        setPhoneWarning(true);
        setPhoneIsEmpty(true);
        return;
      } else {
        setPhoneWarning(false);
        setPhoneIsEmpty(false);
        return;
      }
    }
  }

  function handlePostValidation(post: string) {
    if (post != "") {
      setPostIsEmpty(false);
      return;
    } else {
      setPostWarning(true);
      setPostIsEmpty(true);
    }
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (emailIsEmpty || nameIsEmpty || phoneIsEmpty || postIsEmpty) {
      setAlertToComplete(true);
    } else {
      setAlertToComplete(false);
      setOkMessage(true);

      setTimeout(() => {
        setHasContactModal(false);
      }, 3000);
    }
  }

  return (
    <Container>
      <div className="content">
        <div className="box">
          <div className="close-button">
            <button className="close" onClick={() => setHasContactModal(false)}>
              <img src={close} alt="" />
            </button>
          </div>

          <form id="form" onSubmit={handleFormSubmit} className="form">
            <h1>Contact</h1>

            <div className="field">
              <label htmlFor="name">Name</label>
              {nameWarning && <strong>⚠️ Please enter valid name.</strong>}
              <input
                name="name"
                id="name"
                placeholder="Fill your full name"
                onBlur={(e) => handleFullNameValidation(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              {emailWarning && <strong>⚠️ Please enter valid e-mail.</strong>}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Fill a valid  e-mail"
                onBlur={(e) => handleEmailValidation(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone</label>
              {phoneWarning && <strong>⚠️ Please enter valid phone.</strong>}
              <PhoneInput
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                masks={{ br: "(..) .....-...." }}
                placeholder="Fill your phone"
                onBlur={(e) => handlePhoneValidation(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="post">Post</label>
              {postWarning && <strong>⚠️ This field is required.</strong>}
              <textarea
                form="form"
                placeholder="Hello..."
                onBlur={(e) => handlePostValidation(e.target.value)}
              ></textarea>
            </div>
          </form>

          {alertToComplete && <strong>⚠️ All fields are required.</strong>}
          {okMessage && (
            <strong>
              <img className="loading" src={loading} alt="" /> ✅ All fields
              valid! Redirecting to posts...
            </strong>
          )}

          <button form="form" className="send" type="submit">
            <img src={send} alt="" />
            <p>Submit</p>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
