import { RocketLaunch, X } from "phosphor-react";

type Props = {
  message?: string;
  updateBtn?: () => void;
  closeBtn?: () => void;
};

const SWUpdateMessage = ({ message, updateBtn, closeBtn }: Props) => {
  return (
    <>
      🚀 {message}
      <button onClick={updateBtn}>Update</button>
      <button onClick={closeBtn}>Close</button>
    </>
  );
};

export default SWUpdateMessage;
