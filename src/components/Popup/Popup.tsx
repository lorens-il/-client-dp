import { FC } from "react";
import { useAppDispatch } from "../../hooks/typedSelectors";
import { changeSortType } from "./action";
import { PopupProps } from "../../types/types";

const Popup: FC<PopupProps> = ({ dataSort, setOpenSort, openSort }): JSX.Element => {

    const dispatch = useAppDispatch();

    const handlerSortType = (dataType: string) => {
        dispatch(changeSortType(dataType));
        setOpenSort(false)
    }

    const createListWithSortingTypes = () =>
        dataSort.map(({ name, dataType }) => (
            <li key={dataType} 
                onClick={() => handlerSortType(dataType)}>
                    {name}
            </li>
        ));

    const ListWithSortingTypes = createListWithSortingTypes();

    return <ul className={`list-status__popup ${openSort ? 'active__popup' : ''}`}>{ListWithSortingTypes}</ul>;
};

export default Popup;
