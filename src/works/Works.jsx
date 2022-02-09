import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import jpAxios from "../jpAxios";
import swal from "sweetalert";
import { deleteUserHandler, updateUserService } from "../userServices/UserServices";
import BackToTop from "../BackToTop";


const Todos = () => {

    const navigate = useNavigate();
    const [mainTodos, setMainTodos] = useState([]);
    const [todos, setTodos] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        jpAxios.get(`/todos`).then(res => {
            setMainTodos(res.data);
            setTodos(res.data);
        });
    }, []);

    useEffect(() => {
        searchHandler();
    }, [searchValue]);


    const searchHandler = () => {
        if (searchValue > 0) {
            setTodos(mainTodos.filter(todo => todo.userId == searchValue));
        } else {
            setTodos(mainTodos);
        }
    };




    const deleteHandler = (userId) => {
        swal({
            title: "Delete user todo !",
            text: `Are you sure for delete todo ${userId} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteUserHandler(userId, todos, setTodos, "todos")
                } else {
                    swal("Todo has been saved !");
                }
            })
    };



    const completeHandler = (e,id) => {

        jpAxios.get(`/todos/${id}`).then(res => {
            return {
                userId: res.data.userId,
                id: res.data.id,
                title: res.data.title,
                completed: e.target.checked
            }
        }).then(res => {
            updateUserService(`todos`, res, id);
        })
            .catch(err => alert(err));

           setTimeout(()=>{
            
            const li = e.target.parentElement.parentElement;
            li.classList.toggle("completedLi");
            li.children[0].classList.toggle("complete");
           },2500);
    };



 






    return (
        <div className="m-5">
            <h4 className="text-center HeaderPage">Todos</h4>
            <div className="row d-flex justify-content-between my-4">
                <div className="col-9 col-md-6 col-lg-4">
                    <input type="number" className="form-control bg-dark text-light" placeholder="search..." onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
            <div>
                <ul className="list-group">
                    {
                        todos.length ? todos.map(todo => (

                            <li key={todo.id} className="list-group-item d-flex align-items-center justify-content-between bg-dark text-light text-justify my-1">
                                <div>
                                    <span>
                                        {`${todo.id}.`}
                                        <span className="mx-2 text-secondary">
                                            {`(user ${todo.userId}) : `}
                                        </span>
                                    </span>
                                    <span>
                                        {todo.title}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" className="mx-2 check" onClick={(e) => completeHandler(e,todo.id)}/>
                                    <i className="fa fa-trash text-danger pointer" onClick={() => deleteHandler(todo.id)}></i>
                                </div>
                            </li>

                        )) :
                            <h4 className="text-center mt-5">Loading...</h4>
                    }
                </ul>
            </div>
           
        </div>
    )
};

export default Todos;