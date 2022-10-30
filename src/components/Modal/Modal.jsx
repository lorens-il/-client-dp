import { Formik, Form, Field, ErrorMessage as ErrorForm } from "formik";
import * as Yup from 'yup';
import { useChangeStatusMutation } from "../../api/apiSlice";

import "./Modal.sass";

const Modal = ({statusId, setShowModal}) => {
    
    const [changeStatus] = useChangeStatusMutation();

    return (
        <Formik
            initialValues={
                {
                    nameHardware: '',
                    date: '',
                    statusFix: 'Диагностика'
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
            onSubmit={({date, ...values}, {resetForm}) => {
                changeStatus({
                    id: statusId,
                    ...values,
                    date: new Date(date).toLocaleDateString('ru-RU')
                });
                setShowModal(false);
                resetForm();
            }}
        >
            <Form className="modal">
                <h2 className="modal__title">Изменение статуса</h2>
                <div className="modal__input-wrapper">
                    <label className="modal__label" htmlFor="nameHardware">Имя оборудования</label>
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
                    
                    <button className="btn btn-warning modal__btn" type="submit">Изменить</button>
                </div>
                
            </Form>
        </Formik>
    )
}

export default Modal;