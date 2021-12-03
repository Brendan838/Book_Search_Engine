const { User } = require('../models');

const resolvers = {
  Query: {
  
    // Book: async (parent, { bookID }) => {
    //   return Thought.findOne({ bookID: bookID });
    // },
    Users: async () => {
      const listOfUsers = await User.find()
      return listOfUsers
    },

    // Users: async (parent, { id }) => {
    //   return Thought.findOne({ _id: id });
    // },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },






    saveBook: async (parent, { username, authors, description, bookID, image, title }) => {
      return User.findOneAndUpdate({ username: username}, 
          {
            $addToSet: {
              savedBooks: {
              authors: authors,
              description: description,
              bookID: bookID,
              image: image,
              title: title
             },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );



  




    },
  //   addComment: async (parent, { thoughtId, commentText }) => {
  //     return Thought.findOneAndUpdate(
  //       { _id: thoughtId },
  //       {
  //         $addToSet: { comments: { commentText } },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       
  //     );
  //   },
  //   removeThought: async (parent, { thoughtId }) => {
  //     return Thought.findOneAndDelete({ _id: thoughtId });
  //   },
  //   removeComment: async (parent, { thoughtId, commentId }) => {
  //     return Thought.findOneAndUpdate(
  //       { _id: thoughtId },
  //       { $pull: { comments: { _id: commentId } } },
  //       { new: true }
  //     );
  //   },
  },
};

module.exports = resolvers;
