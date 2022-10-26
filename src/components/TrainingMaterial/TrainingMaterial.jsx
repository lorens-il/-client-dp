import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useGetTrainingMaterialQuery } from '../../api/apiSlice';

import './trainingMaterial.sass';

const TrainingMaterial = () => {

    const {
        data: materials = [],
        isLoading,
        isError
    } = useGetTrainingMaterialQuery();


    const materialCreatings = (materials) => (
        materials.map(({id, title, text}) => (
            <Accordion.Item key={id} eventKey={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {text}
                </Accordion.Body>
            </Accordion.Item>
        ))
    );

	const list = materialCreatings(materials);	

    return (
        <div className="training-material">
            <Accordion className="training-material__list" defaultActiveKey="">
				{list}
            </Accordion>
        </div>
    );
};

export default TrainingMaterial;
