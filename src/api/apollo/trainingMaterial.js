import { gql } from '@apollo/client';

export const GET_TRAINING_MATERIAL = gql`
    query getTrainingMaterial {
        getTrainingMaterial {
            id
            title
            desc
        }
    }
`;

export const ADD_TRAINING_MATERIAL = gql`
    mutation addTrainingMaterial($input: TrainingMaterialInput) {
        addTrainingMaterial(input: $input) {
            id
            title
            desc
        }
    }
`;

export const DELETE_TRAINING_MATERIAL = gql`
    mutation deleteTrainingMaterial($id: ID) {
        deleteTrainingMaterial(id: $id) {
            id
            title
            desc
        }
    }
`;
