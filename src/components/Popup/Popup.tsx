import { FC } from "react";
import { SortProps } from "../../types/types";

const Popup: FC<SortProps> = ({ dataSort }): JSX.Element => {

    const createListWithSortingTypes = () =>
        dataSort.map(({ name, dataType }) => (
            <li key={dataType} data-sort={dataType}>
                {name}
            </li>
        ));

    const ListWithSortingTypes = createListWithSortingTypes();

    return <ul className="list-status__popup">{ListWithSortingTypes}</ul>;
};

export default Popup;
