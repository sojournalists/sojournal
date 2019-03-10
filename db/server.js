const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const config = require("./knexfile");
const db = require("knex")(config);

const currentUser = 4;

// GraphQL schema
let schema = buildSchema(`
    type User {
        id: Int
        name: String
        email: String
    }
    type Device {
        id: Int
        title: String
        deviceSerial: String
    }
    type Photo {
        id: Int
        title: String
        longitude: Float
        latitude: Float
        deviceId: Int
        groupId: Int
        orderInGroup: Int
        commentId: Int
        documentLocation: String
    }
    type Comment {
        id: Int
        title: String
        longitude: Float
        latitude: Float
        groupId: Int
        orderInGroup: Int
    }
    type Group {
        id: Int
        title: String
        longitude: Float
        latitude: Float
        groupId: Int
    }
    input InputUser {
      id: Int
      name: String
      email: String
      password: String
    }
    input InputDevice {
      id: Int
      title: String
      deviceSerial: String
    }
    input InputPhoto {
      id: Int
      title: String
      longitude: Float
      latitude: Float
      deviceId: Int
      groupId: Int
      orderInGroup: Int
      commentId: Int
      documentLocation: String
    }
    input InputComment {
      id: Int
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
      orderInGroup: Int
    }
    input InputGroup {
      id: Int
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
    }

    input UpdateUser {
      id: Int!
      name: String
      email: String
      password: String
    }
    input UpdateDevice {
      id: Int!
      title: String
      deviceSerial: String
    }
    input UpdatePhoto {
      id: Int!
      title: String
      longitude: Float
      latitude: Float
      deviceId: Int
      groupId: Int
      orderInGroup: Int
      commentId: Int
      documentLocation: String
    }
    input UpdateComment {
      id: Int!
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
      orderInGroup: Int
    }
    input UpdateGroup {
      id: Int!
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
    }

    input DestroyUser {
      id: Int!
    }
    input DestroyDevice {
      id: Int!
    }
    input DestroyPhoto {
      id: Int!
    }
    input DestroyComment {
      id: Int!
    }
    input DestroyGroup {
      id: Int!
    }

    type Query {
        ReadUser(type: InputUser): [User]
        ReadDevice(type: InputDevice): [Device]
        ReadPhoto(type: InputPhoto): [Photo]
        ReadComment(type: InputComment): [Comment]
        ReadGroup(type: InputGroup): [Group]
    }

    type Mutation {
        CreateUser(input: InputUser): User
        CreateDevice(input: InputDevice): Device
        CreatePhoto(input: InputPhoto): Photo
        CreateComment(input: InputComment): Comment
        CreateGroup(input: InputGroup): Group
        UpdateUser(input: UpdateUser): User
        UpdateDevice(input: UpdateDevice): Device
        UpdatePhoto(input: UpdatePhoto): Photo
        UpdateComment(input: UpdateComment): Comment
        UpdateGroup(input: UpdateGroup): Group
        DestroyUser(input: DestroyUser): Boolean
        DestroyDevice(input: DestroyDevice): Boolean
        DestroyPhoto(input: DestroyPhoto): Boolean
        DestroyComment(input: DestroyComment): Boolean
        DestroyGroup(input: DestroyGroup): Boolean
    }
`);

// Root resolver
let root = {
  // READ
  ReadUser: (req, res) => {
    //let key = req.type.name || req.type.email;
    return db("users")
      .select()
      .where({ id: req.type.id })
      .then(data => {
        return data;
      });
  },
  ReadDevice: (req, res) => {
    return db("devices")
      .select()
      .where({ user_id: currentUser })
      .then(data => {
        return data;
      });
  },
  ReadPhoto: (req, res) => {
    return db("photos")
      .select()
      .where({ user_id: currentUser })
      .then(data => {
        return data;
      });
  },
  ReadComment: (req, res) => {
    return db("comments")
      .select()
      .where({ user_id: currentUser })
      .then(data => {
        return data;
      });
  },
  ReadGroup: (req, res) => {
    return db("groups")
      .select()
      .where({ user_id: currentUser })
      .then(data => {
        return data;
      });
  },
  // CREATE
  CreateUser: (req, res) => {
    const newUser = req.input;
    db("users")
      .insert({
        name: req.input.name,
        email: req.input.email,
        password: "fake"
      })
      .then(function(result) {
        console.log(result);
      });
    return newUser;
  },
  CreateDevice: (req, res) => {
    const newDevice = req.input;
    db("devices")
      .insert({
        title: "fake device",
        device_serial: req.input.deviceSerial,
        user_id: currentUser
      })
      .then(function(result) {
        console.log(result);
      });
    return newDevice;
  },
  CreatePhoto: (req, res) => {
    const newPhoto = req.input;
    db("photos")
      .insert({
        title: req.input.title,
        longitude: req.input.longitude,
        latitude: req.input.latitude,
        device_id: "1",
        group_id: req.input.groupId,
        order_in_group: req.input.orderInGroup,
        user_id: currentUser,
        comment_id: req.input.commentId,
        document_location: "fake"
      })
      .then(function(result) {
        console.log(result);
      });
    return newPhoto;
  },
  UpdateGroup: (req, res) => {
    const newGroup = req.input;
    db("groups")
      .insert({
        title: req.input.title,
        longitude: req.input.longitude,
        latitude: req.input.latitude,
        user_id: currentUser,
        group_id: req.input.groupId,
        order_in_group: req.input.orderInGroup,
        user_id: currentUser
      })
      .then(function(result) {
        console.log(result);
      });
    return newGroup;
  },
  // UPDATE
  UpdateUser: (req, res) => {
    const updatedUser = req.input;
    db("users")
      .update({
        name: req.input.name,
        email: req.input.email,
        password: "fake"
      })
      .then(function(result) {
        console.log(result);
      });
    return updatedUser;
  },
  UpdateDevice: (req, res) => {
    const updatedDevice = req.input;
    db("devices")
      .update({
        title: "fake device",
        device_serial: req.input.deviceSerial,
        user_id: currentUser
      })
      .then(function(result) {
        console.log(result);
      });
    return updatedDevice;
  },
  UpdatePhoto: (req, res) => {
    const updatedPhoto = req.input;
    db("photos")
      .update({
        title: req.input.title,
        longitude: req.input.longitude,
        latitude: req.input.latitude,
        device_id: "1",
        group_id: req.input.groupId,
        order_in_group: req.input.orderInGroup,
        user_id: currentUser,
        comment_id: req.input.commentId,
        document_location: "fake"
      })
      .then(function(result) {
        console.log(result);
      });
    return updatedPhoto;
  },
  UpdateGroup: (req, res) => {
    const updatedGroup = req.input;
    db("groups")
      .update({
        title: req.input.title,
        longitude: req.input.longitude,
        latitude: req.input.latitude,
        user_id: currentUser,
        group_id: req.input.groupId,
        order_in_group: req.input.orderInGroup,
        user_id: currentUser
      })
      .then(function(result) {
        console.log(result);
      });
    return updatedGroup;
  },
  //DESTROY
  DestroyUser: (req, res) => {
    db("users")
      .where({ id: req.input.id })
      .del()
      .then(function(result) {
        console.log(result);
      });
    return true;
  },
  DestroyDevice: (req, res) => {
    db("devices")
      .where({ id: req.input.id, user_id: currentUser })
      .del()
      .then(function(result) {
        console.log(result);
      });
    return true;
  },
  DestroyPhoto: (req, res) => {
    db("photos")
      .where({ id: req.input.id, user_id: currentUser })
      .del()
      .then(function(result) {
        console.log(result);
      });
    return true;
  },
  DestroyGroup: (req, res) => {
    db("groups")
      .where({ id: req.input.id, user_id: currentUser })
      .del()
      .then(function(result) {
        console.log(result);
      });
    return true;
  }
};

// Create an express server and a GraphQL endpoint
let app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
