// import { useDispatch } from "react-redux";
// import { RemainingTodo } from "../store/action/taskAction";

const Footer = () => {
//   const dispatch = useDispatch();
//   const handleTodo = status =>{
//     dispatch(RemainingTodo(status));
//   }
    return (
        <div className="
        w-full lg:w-1/2 mx-auto grid grid-cols-4 gap-5 items-center h-10">
           <div  className="uppercase border w-full  text-center h-full flex justify-center items-center font-bold bg-sky-200 hover:bg-sky-400">ALL</div>
           <div  className="uppercase border w-28 text-center h-full flex justify-center items-center font-bold bg-red-200  hover:bg-red-400">To do</div>
           <div  className="uppercase border w-28 text-center h-full flex justify-center items-center font-bold bg-yellow-200 hover:bg-yellow-400">Ongoing</div>
           <div className="uppercase border w-28 text-center h-full flex justify-center items-center font-bold bg-green-200 hover:bg-green-400">completed</div>
        </div>
    );
};

export default Footer;