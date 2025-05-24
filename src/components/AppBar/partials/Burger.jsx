import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setIsOpenBurgerModal } from "../../../redux/modal/modalSlice";

export default function Burger() {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setIsOpenBurgerModal(true));
  };

  return (
    <button
      onClick={openModal}
      className="hover-effect hover:text-red block lg:hidden "
    >
      <IoMenu className="w-[30px] sm:w-[36px] h-auto" />
    </button>
  );
}
