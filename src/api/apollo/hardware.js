import { gql } from '@apollo/client';

export const ADD_HARDWARE = gql`
    mutation addHardware($input: HardwareInput) {
        addHardware(input: $input) {
            id
            name
            status
            category
            Date {
                id
                date
                HardwareId
            }
            WorkerId
        }
    }
`;

export const GET_ALL_HARDWARE = gql`
    query {
        getAllHardware {
            id
            name
            status
            category
            Date {
                id
                date
                HardwareId
            }
            WorkerId
        }
    }
`;

export const DELETE_HARDWARE = gql`
    mutation ($id: ID) {
        deleteHardware(id: $id) {
            id
            name
            status
            category
            Date {
                id
                date
                HardwareId
            }
            WorkerId
        }
    }
`;

export const UPDATE_HARDWARE = gql`
    mutation updateHardware($input: HardwareInput) {
        updateHardware(input: $input) {
            id
            name
            status
            category
            Date {
                id
                date
                HardwareId
            }
            WorkerId
        }
    }
`;
