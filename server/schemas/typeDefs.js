const { gql } = require('apollo-server-express');



const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String!
    image: String
    title: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String 
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    users: [User]
    user(username: String!): User
    savedBooks: 
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String!): User
    saveBook( userID: ID, authors: [String], description: String, bookId: String!, image: String, title: String!): User
    removeBook(userID: ID, bookID: String!): User
    # addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    # addComment(thoughtId: ID!, commentText: String!): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
