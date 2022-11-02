import { useDispatch } from 'react-redux';
import { setShowModal, setStatusId, setVarSendMethod } from '../components/pages/ListStatus/listStatusSlice';

const useChangeStatusList = () => {

    const dispatch = useDispatch();

    return (id, method = 'PUT') => {
        document.documentElement.style.overflow = "hidden";
        dispatch(setShowModal(true));
        dispatch(setStatusId(id));
        dispatch(setVarSendMethod(method));
    };

}

export default useChangeStatusList;
