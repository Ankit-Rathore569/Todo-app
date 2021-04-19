import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodoList } from '../redux/action/todoAction';

const DetailView = () => {
    const { todolist } = useSelector((state) => state.todoRed);
    console.log("TodoList", todolist);
    const dispatch = useDispatch();
    const editTodo = () => {
        console.log("Hurreee its working")
    }

    const deleteTodo = (id) => {
        dispatch(deleteTodoList(id))
    }
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
                                <td>
                                    <Link to="#">
                                        <span onClick={editTodo}><i className="far fa-edit"></i></span>
                                    </Link >
                                    &nbsp;&nbsp;&nbsp;
                                <Link to="#">
                                        <span onClick={() => deleteTodo(index)}> <i className="fas fa-trash"></i></span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment >
    )
}

export default DetailView
