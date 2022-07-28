import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
        loginUser($email: String!, $password: String!)
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String! $email: String!, $password: String!) {
        addUser($username: String! $email: String!, $password: String!)
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook() {
        saveBook()
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook() {
        removeBook()
    }
`;
