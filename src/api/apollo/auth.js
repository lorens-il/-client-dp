import { gql } from '@apollo/client';

export const REGISTRATION = gql`
    mutation registration($input: WorkerInput) {
        registration(input: $input) {
            token
        }
    }
`;

export const LOGIN = gql`
    mutation login($input: WorkerInput) {
        login(input: $input) {
            token
        }
    }
`;
