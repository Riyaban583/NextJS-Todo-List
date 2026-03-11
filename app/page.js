"use client";

import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get("/api");
    setTodoData(response.data.todos);
  };

  const deleteTodo = async (id) => {

    const response = await axios.delete("/api",{
      params:{
        mongoId:id
      }
    });

    toast.success(response.data.message);
    fetchTodos();
  };

  const completeTodo = async (id) => {

    const response = await axios.put("/api",{
      mongoId:id
    });

    toast.success(response.data.message);
    fetchTodos();
  };

  useEffect(()=>{
    fetchTodos();
  },[])

  const onChangeHandler = (e)=>{
    const {name,value} = e.target;

    setFormData((form)=>({
      ...form,
      [name]:value
    }))
  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try{

      await axios.post("/api",formData);

      toast.success("Todo created successfully");

      setFormData({
        title:"",
        description:""
      });

      fetchTodos();

    }
    catch(error){
      toast.error("Error");
    }
  }

  return (
    <>
      <ToastContainer theme="dark" />

      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      >

        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={onChangeHandler}
          className="px-3 py-2 border-2 w-full"
        />

        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={onChangeHandler}
          className="px-3 py-2 border-2 w-full"
        ></textarea>

        <button
          type="submit"
          className="bg-orange-600 py-3 px-11 text-white"
        >
          Add Todo
        </button>

      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">

        <table className="w-full text-sm text-left">

          <thead className="text-sm bg-gray-200 border-b">
            <tr>
              <th className="px-6 py-3 font-medium">Id</th>
              <th className="px-6 py-3 font-medium">Title</th>
              <th className="px-6 py-3 font-medium">Description</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>

            {todoData.map((item,index)=>{
              return(
                <Todo
                  key={item._id}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              )
            })}

          </tbody>

        </table>

      </div>
    </>
  )
}