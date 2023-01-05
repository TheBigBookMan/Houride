import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        password
        dateJoined
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        dateJoined
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;
