import { Button } from "../Button";
import useModal from "../Modal/useModal";
import Filter from "../TodoFilter";
import Modal from "../Modal";
import TodoEditor from "../TodoEditor";
import styles from "./ButtonGroup.module.css";

const ButtonsGroup: React.FC = () => {
  const { toggle, isShowing } = useModal();
  return (
    <div className={styles.buttonGroup}>
      <Button onClick={toggle} aria-label="Add todo">
        Add todo
      </Button>
      <Filter />
      <Modal isShowing={isShowing} hide={toggle}>
        <TodoEditor onSave={toggle} />
      </Modal>
    </div>
  );
};

export default ButtonsGroup;
