import { Formik, Form, Field, ErrorMessage as ErrorForm } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { 
    useChangeStatusReparedMutation, 
    useAddStatusReparedMutation, 
    useAddStatusOrderedMutation,
    useChangeStatusOrderedMutation
} from "../../api/apiQuery";
import {setShowModal} from "../pages/ListStatus/listStatusSlice";
import * as Yup from 'yup';

import "./Modal.sass";

const Modal = () => {
    
    const [addStatusRepared] = useAddStatusReparedMutation();
    const [changeStatusRepared] = useChangeStatusReparedMutation();
    const [addStatusOrdered] = useAddStatusOrderedMutation();
    const [changeStatusOrdered] = useChangeStatusOrderedMutation();

    const {statusId, varSendMethod} = useSelector(state => state.listStatus);
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    const urlStatusRepaired = "/status-repaired-hardware";
    const urlStatusOrdered = "/status-ordered-hardware";

    const onSubmitForm = ({date, ...values}, {resetForm}) => {

        const newStatus = {
            id: statusId,
            ...values,
            date: new Date(date).toLocaleDateString('ru-RU')
        };

        if (varSendMethod === "PUT" && pathname === urlStatusRepaired) {
            changeStatusRepared(newStatus);
        }
        if (varSendMethod === "PUT" && pathname === urlStatusOrdered) {
            changeStatusOrdered(newStatus);
        }

        if (varSendMethod === "POST" && pathname === urlStatusRepaired) {
            addStatusRepared(newStatus);
        }
        if (varSendMethod === "POST" && pathname === urlStatusOrdered) {
            addStatusOrdered(newStatus);
        }

        dispatch(setShowModal(false));
        resetForm();
    };

    return (
        <Formik
            initialValues={
                {
                    nameHardware: '',
                    date: '',
                    statusFix: pathname === urlStatusRepaired ? 'Диагностика' : 'Заказано'
                }
            }
            validationSchema={Yup.object(
                {
                    nameHardware: Yup.string()
                                    .min(3, 'Минимум 3 символа!')
                                    .required('Обязательное поле!'),
                    date: Yup.date().required('Обязательное поле!'),
                    statusFix: Yup.string()
                                .min(3, 'Минимум 3 символа!')
                                .required('Обязательное поле!'),
                }
            )}
            onSubmit={onSubmitForm}
            >
            <Form className="modal">
                <h2 className="modal__title">Изменение статуса</h2>
                <div className="modal__input-wrapper">
                    <label className="modal__label" htmlFor="nameHardware">Название оборудования</label>
                    <ErrorForm className="modal__error" name="nameHardware" component="div" />
                    <Field
                        id="nameHardware"
                        name="nameHardware"
                        className="modal__input"
                        type="text"
                    />
                    <label className="modal__label" htmlFor="date">Дата приёма</label>
                    <ErrorForm className="modal__error" name="date" component="div" />
                    <Field
                        id="date"
                        name="date"
                        className="modal__input"
                        type="date"
                    />
                    <label className="modal__label" htmlFor="statusFix">Статус ремонта</label>
                    <ErrorForm className="modal__error" name="statusFix" component="div" />
                    {
                        pathname === urlStatusRepaired ? 
                            <Field
                                className="modal__input"
                                id="statusFix"
                                name="statusFix"
                                type="statusFix"
                                as="select">
                                    <option value="Диагностика">Диагностика</option>
                                    <option value="Ожидание запчастей">Ожидание запчастей</option>
                                    <option value="Исправление неисправности">Исправление неисправности</option>
                                    <option value="Отремонтировано">Отремонтировано</option>
                                    <option value="Отдано заказчику">Отдано заказчику</option>
                            </Field> 
                        :
                            <Field
                                className="modal__input"
                                id="statusFix"
                                name="statusFix"
                                type="statusFix"
                                as="select">
                                    <option value="Заказано">Заказано</option>
                                    <option value="Доставляется">Доставляется</option>
                                    <option value="Получено">Получено</option>
                                    <option value="Выдано заказчику">Выдано заказчику</option>
                            </Field>
                    }
                    <button className="btn btn-warning modal__btn" type="submit">{varSendMethod === "PUT" ? "Изменить" : "Добавить"}</button>
                </div>
                
            </Form>
        </Formik>
    )
}

export default Modal;