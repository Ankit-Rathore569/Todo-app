import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
const Completed = () => {
    const { todolist } = useSelector((state) => state.todoRed);

    var currentDate = new Date().toISOString().slice(0, 10);

    var result = todolist.filter(item => {
        return (currentDate >= item.endDate);
    })

    return (
        <Fragment>
            <h1>
                <span className="styling">Completed &nbsp;</span>Todo's
      </h1>
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Todo</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Completed On</th>
                            <th scope="col">Marked As</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.addTodo}</td>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td className={currentDate >= item.endDate ? (
                                    'greenColor'
                                ) : (
                                    'crossColor'
                                )}><i className="fas fa-check-circle"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Completed
