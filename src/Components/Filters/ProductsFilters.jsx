import Button from "@ui/Button";
import { IoIosOptions } from "react-icons/io";
import Modal from "@ui/Modal";
import Filters from "./Filters";

export default function ProductsFilters() {
  return (
    <div className="pt-8 px-5 flex gap-5 justify-center">
      <Modal>
        <Modal.Open windowName={"Filters"}>
          <Button Icon={<IoIosOptions />}>Filters</Button>
        </Modal.Open>
        <Modal.Window windowName={"Filters"}>
          <Filters></Filters>
        </Modal.Window>
      </Modal>
      <Button Icon={<IoIosOptions />}>Filters</Button>
    </div>
  );
}
