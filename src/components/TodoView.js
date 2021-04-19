import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from "../redux/action/todoAction";
import { Link } from "react-router-dom";

const TodoView = () => {
    const [addTodo, setAddTodo] = useState("");
    const [endDate, setendDate] = useState("");
    const dispatch = useDispatch();
    const { todolist } = useSelector((state) => state.todoRed);


    const submitHandler = (e) => {
        e.preventDefault();
        var startDate = new Date().toISOString().slice(0, 10);

        dispatch(addTodoList({ addTodo, startDate, endDate }));
    };
    return (
        <Fragment>
            <h1>
                <span className="styling">TODO</span>List
      </h1>
            <form onSubmit={submitHandler}>
                <div className="input_div">
                    <label className="text-white" htmlFor="Inputtext1">
                        TODO
          </label>
                    <input
                        type="text"
                        className="input"
                        value={addTodo}
                        id="Inputtext1"
                        onChange={(e) => setAddTodo(e.target.value)}
                        placeholder="What Do You Want to Do ..."
                    />

                    <label className="text-white" htmlFor="InputDate1">
                        Date of complition
          </label>
                    <input
                        type="date"
                        className="input"
                        id="InputDate1"
                        value={endDate}
                        onChange={(e) => setendDate(e.target.value)}
                    />

                    <button className="addButton">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </form>
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Todo</th>
                            <th scope="col">Detailed View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todolist.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.addTodo.slice(0, 5) + "..."}</td>
                                <td>
                                    <Link to="/detailview"><i className="fas fa-eye"></i></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div></div>
        </Fragment>
    );
};

export default TodoView;
