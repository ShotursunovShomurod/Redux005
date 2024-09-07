import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { update } from "../../redux/cart";
import { v4 as id } from "uuid";
import { useGetValues } from "../hooks/useGetValue";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialState = {
  id: "",
  username: "",
  lname: "",
  phone: "",
  desc: "",
};
export default function BasicModal({ ooo }) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState("");
  const handlSumbit = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch(update({ cart: { ...data, id: id() } }));
  };
  const { data, handleChange } = useGetValues(initialState);

  return (
    <div>
      <Button onClick={handleOpen}>{ooo}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handlSumbit}
            className="flex flex-col gap-2"
            action=""
          >
            <div className="flex flex-col gap-1">
              <label className="text-green-400 font-[600]" htmlFor="Username">
                Username
              </label>
              <input
                required
                value={data.title}
                onChange={handleChange}
                name="username"
                className="border outline-none py-1 pl-2"
                type="text"
                placeholder="username"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-green-400 font-[600]" htmlFor="Username">
                Lname
              </label>
              <input
                required
                value={data.lname}
                onChange={handleChange}
                name="lname"
                className="border outline-none py-1 pl-2"
                type="text"
                placeholder="Lname"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-green-400 font-[600]" htmlFor="Username">
                Phone
              </label>
              <input
                required
                value={data.phone}
                onChange={handleChange}
                name="phone"
                className="border outline-none py-1 pl-2"
                type="number"
                placeholder="phone"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-green-400 font-[600]" htmlFor="Username">
                Desc
              </label>
              <input
                value={data.desc}
                onChange={handleChange}
                name="desc"
                className="border outline-none py-1 pl-2"
                type="text"
                placeholder="desc"
              />
            </div>
            <button className="w-ful py-1 bg-blue-700 text-[#fff]">Create Card</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
