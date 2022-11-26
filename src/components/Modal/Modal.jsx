import { Formik, Form, Field, ErrorMessage as ErrorForm } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { 
    useChangeStatusReparedMutation, 
    useAddStatusReparedMutation, 
    useAddStatusOrderedMutation
} from "../../api/apiQuery";
import {useMutation} from "@apollo/client";
import { ADD_HARDWARE, UPDATE_HARDWARE } from "../../api/apollo/hardware";
import {setShowModal} from "../pages/ListStatus/listStatusSlice";
import * as Yup from 'yup';

import "./Modal.sass";

const Modal = () => {
    
    const [addStatusRepared] = useAddStatusReparedMutation();
    const [changeStatusRepared] = useChangeStatusReparedMutation();
    const [addStatusOrdered] = useMutation(ADD_HARDWARE);
    const [changeStatusOrdered] = useMutation(UPDATE_HARDWARE);

    const {statusId, varSendMethod} = useSelector(state => state.listStatus);
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    const urlStatusRepaired = "/status-repaired-hardware";
    const urlStatusOrdered = "/status-ordered-hardware";

    const onSubmitForm = ({date, ...values}, {resetForm}) => {

        const newStatus = {
            id: varSendMethod === "PUT" ? statusId : 3, // вместо трёх получать id работника из localStorage
            ...values,
            date: date,
            category: pathname === urlStatusOrdered ? "ordered" : "repaired"
        };

        if (varSendMethod === "PUT" && pathname === urlStatusRepaired) {
            changeStatusRepared(newStatus);
        }
        if (varSendMethod === "PUT" && pathname === urlStatusOrdered) {
            changeStatusOrdered({variables: {input: newStatus}});
        }

        if (varSendMethod === "POST" && pathname === urlStatusRepaired) {
            addStatusRepared(newStatus);
        }
        if (varSendMethod === "POST" && pathname === urlStatusOrdered) {
            addStatusOrdered({variables: {input: newStatus}});
        }

        dispatch(setShowModal(false));
        resetForm();
        document.documentElement.style.overflow = "auto";
    };

    return (
        <Formik
            initialValues={
                {
                    name: '',
                    date: '',
                    status: ''
                }
            }
            validationSchema={Yup.object(
                {
                    name: Yup.string()
                                    .min(3, 'Минимум 3 символа!')
                                    .required('Обязательное поле!'),
                    date: Yup.date().required('Обязательное поле!'),
                    status: Yup.string()
                                .min(3, 'Минимум 3 символа!')
                                .required('Обязательное поле!'),
                }
            )}
            onSubmit={onSubmitForm}
            >
            <Form className="modal">
                <h2 className="modal__title">Изменение статуса</h2>
                <div className="modal__input-wrapper">
                    <label className="modal__label" htmlFor="name">Название оборудования</label>
                    <ErrorForm className="modal__error" name="name" component="div" />
                    <Field
                        id="name"
                        name="name"
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
                    <label className="modal__label" htmlFor="status">Статус ремонта</label>
                    <ErrorForm className="modal__error" name="status" component="div" />
                    {
                        pathname === urlStatusRepaired ? 
                            <Field
                                className="modal__input"
                                id="status"
                                name="status"
                                type="status"
                                as="select"
                                >
                                    <option value="">Выберите статус</option>
                                    <option value="Диагностика">Диагностика</option>
                                    <option value="Ожидание запчастей">Ожидание запчастей</option>
                                    <option value="Исправление неисправности">Исправление неисправности</option>
                                    <option value="Отремонтировано">Отремонтировано</option>
                                    <option value="Отдано заказчику">Отдано заказчику</option>
                            </Field> 
                        :
                            <Field
                                className="modal__input"
                                id="status"
                                name="status"
                                type="status"
                                as="select"
                                >
                                    <option value="">Выберите статус</option>
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