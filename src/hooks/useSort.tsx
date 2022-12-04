import { DataType, Hardware } from '../types/types';


const useSort = (hardware: Hardware[], sortType: string) => {

    const copyHardware = JSON.parse(JSON.stringify(hardware));

    const sortingDateDesc = (firstItem: Hardware, nextItem: Hardware) => {
        return +nextItem.Date.date - +firstItem.Date.date;
    }; 

    const sortingDateAsc = (firstItem: Hardware, nextItem: Hardware) => {
        return +firstItem.Date.date - +nextItem.Date.date;
    };

    const sortingAlpabletDesc = (firstItem: Hardware, nextItem: Hardware) => {
        return firstItem.name > nextItem.name ? -1 : 1
    };

    const sortingAlpabletAsc = (firstItem: Hardware, nextItem: Hardware) => {
        return firstItem.name < nextItem.name ? -1 : 1
    }

    switch (sortType) {
        case DataType.DATE_DESC: 
            return copyHardware.sort(sortingDateDesc);
        case DataType.DATE_ASC:
            return copyHardware.sort(sortingDateAsc);
        case DataType.ALPABLET_DESC:
            return copyHardware.sort(sortingAlpabletDesc);
        case DataType.ALPABLET_ASC:
            return copyHardware.sort(sortingAlpabletAsc);
        default:
            return hardware;
    }
};

export default useSort;
