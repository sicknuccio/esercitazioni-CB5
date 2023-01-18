import "./index.css";

const Modal = ({ children, setModalActive }) => {
  return (
    <div className="Modal" onClick={() => setModalActive(false)}>
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;
