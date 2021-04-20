import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodoList } from "../redux/action/todoAction";

const DetailView = () => {
    const { todolist } = useSelector((state) => state.todoRed);
    const dispatch = useDispatch();
    var currentDate = new Date().toISOString().slice(0, 10);
    const deleteTodo = (id) => {
        dispatch(deleteTodoList(id));
    };
    var linkStyle = { cursor: 'pointer', textDecoration: "none", hover: "none" };
    return (
        <Fragment>
            <h1>
                <span className="styling">My-Todo</span>List
      </h1>
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Todo</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Completed To Be</th>
                            <th scope="col">Marked As</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todolist.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.addTodo}</td>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td className={currentDate >= item.endDate ? (
                                    'greenColor'
                                ) : (
                                    'crossColor'
                                )}>
                                    {currentDate >= item.endDate ? (
                                        <i style={linkStyle} className="fas fa-check-circle"></i>
                                    ) : (
                                        <i style={linkStyle} className="fas fa-times-circle"></i>
                                    )}
                                </td>

                                <td>
                                    <span>
                                        <i
                                            className="fas fa-trash deleteColor"
                                            onClick={() => deleteTodo(index)}
                                        ></i>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>
                    <Link to="/completed-todo" style={linkStyle} className="editColor">Complete Todo</Link>
                </h4>
            </div>
        </Fragment>
    );
};

export default DetailView;
