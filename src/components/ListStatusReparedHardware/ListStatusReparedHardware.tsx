import { useQuery, useMutation } from '@apollo/client';
import useChangeStatusList from '../../hooks/useChangeStatusList';
import { GET_ALL_HARDWARE, DELETE_HARDWARE } from '../../api/apollo/hardware';
import { Hardware } from '../../types/types';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/typedSelectors';
import useSort from '../../hooks/useSort';

const ListStatusReparedHardware: FC = (): JSX.Element => {
    const {
        data: { getAllHardware: hardware = [] } = { hardware: [] },
        loading,
        error,
    } = useQuery(GET_ALL_HARDWARE, { variables: { category: 'repaired' } });

    const { sortType } = useAppSelector((state) => state.sortTypeReducer);

    const sortedHardware = useSort(hardware, sortType);

    const [delHardware] = useMutation(DELETE_HARDWARE);

    const changeStatusList = useChangeStatusList();

    const deletingHardwareById = (id: number) => {
        delHardware({ variables: { id } });
    };

    const listCreatings = (sortedHardware: Hardware[]) => {
        if (sortedHardware.length === 0) {
            return (
                <tr className="list-status__empty">
                    <td>Статусов нет</td>
                </tr>
            );
        }

        return sortedHardware.map(({ id, name, Date, status }) => (
            <tr key={id}>
                <td>{name}</td>
                <td>{new Intl.DateTimeFormat().format(Date.date)}</td>
                <td>{status}</td>
                <td className="list-status__wrapper-management">
                    <button
                        className="btn btn-warning list-status__btn list-status__btn_small"
                        onClick={() => changeStatusList(id)}>
                        Внести изменения
                    </button>
                    <button
                        className="btn btn-danger list-status__btn list-status__btn_small"
                        onClick={() => deletingHardwareById(id)}>
                        Удалить
                    </button>
                </td>
            </tr>
        ));
    };

    const list = listCreatings(sortedHardware);

    return <>
                {list}
            </>;
};

export default ListStatusReparedHardware;
