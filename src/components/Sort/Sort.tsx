import { FC, useState } from 'react';
import { SortProps } from '../../types/types';
import Popup from '../Popup/Popup';

// {
//     name: "Дата ASC",
//     dataSort: "date-asc",
//     categories: ["ordered", "repaired"]
// }

const Sort: FC<SortProps> = ({ dataSort }): JSX.Element => {
    const [openSort, setOpenSort] = useState(false);

    return (
        <div className="list-status__container">
            <div
                className="list-status__sort-wrapper"
                onClick={() => setOpenSort((openSort) => !openSort)}>
                <div className="list-status__sort-type">Сортировка:</div>
                <svg className="list-status__sort" width="28" height="28" viewBox="0 0 28 28">
                    <title>sort-amount-asc</title>
                    <path d="M11.5 22.5c0 0.141-0.063 0.266-0.156 0.375l-4.984 4.984c-0.109 0.094-0.234 0.141-0.359 0.141s-0.25-0.047-0.359-0.141l-5-5c-0.141-0.156-0.187-0.359-0.109-0.547s0.266-0.313 0.469-0.313h3v-21.5c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v21.5h3c0.281 0 0.5 0.219 0.5 0.5zM28 24.5v3c0 0.281-0.219 0.5-0.5 0.5h-13c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h13c0.281 0 0.5 0.219 0.5 0.5zM25 16.5v3c0 0.281-0.219 0.5-0.5 0.5h-10c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h10c0.281 0 0.5 0.219 0.5 0.5zM22 8.5v3c0 0.281-0.219 0.5-0.5 0.5h-7c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h7c0.281 0 0.5 0.219 0.5 0.5zM19 0.5v3c0 0.281-0.219 0.5-0.5 0.5h-4c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h4c0.281 0 0.5 0.219 0.5 0.5z"></path>
                </svg>
            </div>
            <Popup dataSort={dataSort} setOpenSort={setOpenSort} openSort={openSort} />
        </div>
    );
};

export default Sort;
