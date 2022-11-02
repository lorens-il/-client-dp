import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "./listStatusSlice";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';

import Modal from "../../Modal/Modal";
import useChangeStatusList from "../../../hooks/useChangeStatusList";

import "./listStatus.sass";

const ListStatus = (props) => {

    const {showModal} = useSelector(state => state.listStatus);
    const dispatch = useDispatch();

    const {pathname} = useLocation();

    const changeStatusList = useChangeStatusList();

    const closeModal = (e) => {
        if(e.target.classList.contains('list-status__modal')) {
            dispatch(setShowModal(false));
            document.documentElement.style.overflow = "auto";
        }
    }

    const addNewStatus = () => {
        changeStatusList(uuidv4(), "POST");
    }

    return (
        <div className="list-status">
            <div className="list-status__wrapper">
                <h2 className="list-status__title">
                    {pathname === '/status-repaired-hardware' ? 'Статус ремонтно-диагностических работ' : 'Cтатус заказанного оборудования'}
                </h2>
                <Table className="list-status__table" borderless hover size="xl">
                    <thead className="list-status__head bg-warning">
                        <tr>
                            <th>Название оборудования</th>
                            <th>Дата приёма</th>
                            <th>Статус ремонта</th>
                            <th>Управление</th>
                        </tr>
                    </thead>
                    <tbody className="list-status__content">
                        {props.children}
                    </tbody>
                </Table>
                <button className="btn btn-warning list-status__btn" onClick={addNewStatus}>Внести новую запись</button>
            </div>
            <div className={`list-status__modal ${showModal === true ? 'active' : ''}`} onClick={(e) => closeModal(e)}>
                <Modal />
            </div>
        </div>
    )
}

export default ListStatus;