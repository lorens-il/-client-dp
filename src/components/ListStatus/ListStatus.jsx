import { Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import {useGetStatusQuery, useDeleteStatusMutation} from "../../api/apiSlice";
import { v4 as uuidv4 } from 'uuid';

import Modal from "../Modal/Modal";
import "./listStatus.sass";
import { useState } from "react";


const ListStatus = () => {

    const [showModal, setShowModal] = useState(false);
    const [statusId, setStatusId] = useState();
    
    const {
        data: hardware = [],
        isLoading,
        isError
    } = useGetStatusQuery();

    const [delHardware] = useDeleteStatusMutation();

    const deletingHardwareById = id => {
        delHardware(id);
    }

    const openModal = (id) => {
        setShowModal(true);
        setStatusId(id);
    }

    const closeModal = (e) => {
        if(e.target.classList.contains('list-status__modal')){
            setShowModal(false);
        }
    }

    const listCreatings = (hardware) => {

            if (hardware.length === 0) {
                return <tr className="list-status__empty"><td>Статусов нет</td></tr>
            }

            return hardware.map(({id, nameHardware, date, statusFix}) => (
                    <tr key={id}>
                        <td>{nameHardware}</td>
                        <td>{date}</td>
                        <td>
                            {statusFix}
                        </td>
                        <td className="list-status__wrapper-management">
                            <button className="btn btn-warning list-status__btn list-status__btn_small" onClick={() => openModal(id)}>Внести изменения</button>
                            <button className="btn btn-danger list-status__btn list-status__btn_small" onClick={() => deletingHardwareById(id)}>Удалить</button>
                        </td>
                    </tr>
                // <tr key={uuidv4()}>
                // <td><input name="name" type="text" /></td>
                // <td><input type="date" name="date" id="date" /></td>
                // <td>
                // <select id="status-select">
                //     <option value="">Выберете статус</option>
                //     <option value="diagnostic">Диагностика</option>
                //     <option value="waiting for spare parts">Ожидание запчастей </option>
                //     <option value="troubleshooting">Исправление неисправности</option>
                //     <option value="repaired">Отремонтировано</option>
                //     <option value="given to the customer">Отдано заказчику</option>
                // </select>
                // </td>
                // <td><Link to="passenger-data" className="btn btn-warning" >Внести</Link></td>
                // </tr>
            )
        ) 
             
    }

    const list = listCreatings(hardware);

    return (
        <div className="list-status">
            <div className="list-status__wrapper">
                <h2 className="list-status__title">Статус ремонтно-диагностических работ</h2>
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
                        {list}
                    </tbody>
                </Table>
                <Link to="listStatus" className="btn btn-warning list-status__btn">Внести новую запись</Link>
            </div>
            <div className={`list-status__modal ${showModal === true ? 'active' : ''}`} onClick={(e) => closeModal(e)}>
                <Modal statusId={statusId} setShowModal={setShowModal}/>
            </div>
        </div>
    )
}

export default ListStatus;