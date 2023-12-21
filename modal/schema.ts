import { gql } from "apollo-server-express";
import User from "./User"; // Assuming you have a User model type/interface

const typeDefs = gql`
  type User {
    firstName: String
    email: String
    password:String
  }

  type Query {
    users: [User]
  }

  # Define the createUser mutation
`;

const resolvers = {
  Query: {
    users: async () => {
      try {
        // Fetch user data from your data source (e.g., database)
        const userData = await User.find(); // Replace with your fetching logic
        
        // Log the user data to the console
        console.log(userData);

        // Return the user data
        return userData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  },
};

export { typeDefs, resolvers };
