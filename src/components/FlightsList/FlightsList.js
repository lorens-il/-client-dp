import { Table } from "react-bootstrap"
import {useGetFlightsQuery} from "../../api/apiSlice";

import "./FlightsList.sass";

const FlightsList = () => {

    const {
        data = [],
        isLoading,
        isError
    } = useGetFlightsQuery();

    const listCreatings = () => {
        return data
        .map(({id, departuteCity, arrivalCity, departureAirport, arrivalAirport, departureTime, arrivalTime, modelAirplane, cost}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{departuteCity}</td>
                    <td>{arrivalCity}</td>
                    <td>{departureTime}</td>
                    <td>{arrivalTime}</td>
                    <td>{departureAirport}</td>
                    <td>{arrivalAirport}</td>
                    <td>{modelAirplane}</td>
                    <td>{cost}&#8381;</td>
                    <td><a className="btn btn-warning" href="http://yandex.com">Купить</a></td>
                </tr>
            )
        })      
    }

    const list = listCreatings();

    return (
        <div className="flights-list">
                <div className="flights-list__wrapper">
                    <div className="flights-list__title">Список рейсов</div>
                    <Table className="flights-list__table" borderless hover size="xl">
                        <thead className="flights-list__head bg-warning">
                            <tr>
                                <th>Номер рейса</th>
                                <th>Город отправления</th>
                                <th>Город прибытия</th>
                                <th>Время отправления</th>
                                <th>Время прибытия</th>
                                <th>Аэропорт отправления</th>
                                <th>Аэропорт прибытия</th>
                                <th>Название самолёта</th>
                                <th>Цена билета</th>
                            </tr>
                        </thead>
                        <tbody className="flights-list__content">
                            {list}
                        </tbody>
                    </Table>
                </div>
        </div>
    )
}

export default FlightsList;