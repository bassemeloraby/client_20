import React, { Fragment, useEffect, useRef, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import Modal from "react-modal";
import { logout, reset } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

Modal.setAppElement("#root");
const IdleTimerContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timer, setTimer] = useState(10);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idleTimerRef = useRef(null);
  const sessionTimeOutRef = useRef(null);

  const onIdle = () => {
    console.log("user is idle");
    setModalIsOpen(true);
    sessionTimeOutRef.current = setTimeout(onLogout, 10000);
  };

  const idletimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    timeout: 100 * 10000,
    onIdle: onIdle,
  });

  const onLogout = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeOutRef.current);

    dispatch(logout());
    dispatch(reset());
    console.log("user inactive");
    navigate("/");
  };

  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeOutRef.current);
    window.location.reload();

    console.log("user still active");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    if (modalIsOpen) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
        console.log("This will be called every 1 second");
      }, 1000);
      setTimer(10)
      return () => clearInterval(interval);
    }
  }, [modalIsOpen]);

  return (
    <Fragment>
      {isLoggedIn ? <h2> Welcome admin</h2> : <h2>hello guset</h2>}
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <h2>you have been idle for a while!</h2>
        <p>you will be logged out soon</p>
        <div>
          <Button onClick={onLogout} variant="danger">
            log me out
          </Button>{" "}
          <Button onClick={stayActive} variant="success">
            keep me sign in
          </Button>{" "}
        </div>
        {timer}
      </Modal>
      <div idletimer={idletimer}></div>;
    </Fragment>
  );
};

export default IdleTimerContainer;
