import ReactDOM from "react-dom";

export default function ContactTab() {
  console.log('render contact')
  return (
    ReactDOM.createPortal(
      <div onClick={(e) => {
        // e.stopPropagation()
        console.log('=====> click contact')
      }}>
        contact
      </div>,
      document.body
    )
  );
}
