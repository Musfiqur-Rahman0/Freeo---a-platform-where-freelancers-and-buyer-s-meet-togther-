import React, { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import TaskForm from "./TaskForm";
import Swal from "sweetalert2";

const UpdateModal = ({ open, setOpen, taskdata }) => {
  //   const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-16 sm:w-1/2  data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <TaskForm
              btnText={"Update Task"}
              primaryText="Update Your task"
              taskdata={taskdata}
              handlerFunc={handleUpdate}
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateModal;
