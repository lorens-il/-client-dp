import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {useQuery} from "@apollo/client"
import {GET_TRAINING_MATERIAL} from '../../api/apollo/trainingMaterial'


import './trainingMaterial.sass';

const TrainingMaterial = () => {

    const {
        data: {getTrainingMaterial: materials = []} = {materials: []}, 
        loading,
        error 
    } = useQuery(GET_TRAINING_MATERIAL);

    const materialCreatings = (materials) => (
        materials.map(({id, title, desc}) => (
            <Accordion.Item key={id} eventKey={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {desc}
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
