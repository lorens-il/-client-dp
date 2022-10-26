import { Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import {useGetStatusQuery} from "../../api/apiSlice";
import { v4 as uuidv4 } from 'uuid';

import "./listStatus.sass";

const ListStatus = () => {

    const {
        data = [],
        isLoading,
        isError
    } = useGetStatusQuery();

    const listCreatings = (data) => {
            
            return data.map(({id, nameHardware, date, statusFix}) => (
                    <tr key={id}>
                        <td>{nameHardware}</td>
                        <td>{date}</td>
                        <td>
                            {statusFix}
                        </td>
                        <td className="list-status__wrapper-management">
                            <Link to="passenger-data" className="btn btn_small btn-warning list-status__btn">Внести изменения</Link>
                            <Link to="passenger-data" className="btn btn_small btn-danger list-status__btn">Удалить</Link>
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

    const list = listCreatings(data);

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
                    <Link to="passenger-data" className="btn btn-warning list-status__btn">Внести новую запись</Link>
                </div>
        </div>
    )
}

export default ListStatus;