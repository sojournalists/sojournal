module.exports = `
    type User {
        id: Int
        name: String
        email: String
        createdAt: String
        updatedAt: String
    }
    type Device {
        id: Int
        title: String
        deviceSerial: String
        createdAt: String
        updatedAt: String
    }
    type Photo {
        id: Int
        title: String
        longitude: Float
        latitude: Float
        deviceId: Int
        groupId: Int
        orderInGroup: Int
        comment: String
        imageFile: String
        altitude: Float
        bearing: Float
        createdAt: String
        updatedAt: String
    }
    type Comment {
        id: Int
        title: String
        longitude: Float
        latitude: Float
        groupId: Int
        orderInGroup: Int
        createdAt: String
        updatedAt: String
    }
    type Group {
        id: Int
        title: String
        longitude: Float
        latitude: Float
        groupId: Int
        createdAt: String
        updatedAt: String
    }
    type LogCamConfig {
        id: Int
        title: String
        deviceId: Int
        intervalStartMethod: String
        intervalStartTimeOfDay: Int
        intervalStartEpoch: Int
        intervalStartCountdown: Int
        intervalStopMethod: String
        intervalStopTimeOfDay: Int
        intervalStopEpoch: Int
        intervalStopCountdown: Int
        intervalInterval: Int
        createdAt: String
        updatedAt: String
    }

    input InputUser {
      id: Int
      name: String
      email: String
      password: String
      createdAt: String
      updatedAt: String
    }
    input InputDevice {
      id: Int
      title: String
      deviceSerial: String
      createdAt: String
      updatedAt: String
    }
    input InputPhoto {
      id: Int
      title: String
      longitude: Float
      latitude: Float
      deviceId: Int
      groupId: Int
      orderInGroup: Int
      comment: String
      imageFile: String
      altitude: Float
      bearing: Float
      createdAt: String
      updatedAt: String
    }
    input InputComment {
      id: Int
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
      orderInGroup: Int
      createdAt: String
      updatedAt: String
    }
    input InputGroup {
      id: Int
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
      createdAt: String
      updatedAt: String
    }
    input InputLogCamConfig {
      id: Int
      title: String
      deviceId: Int
      intervalStartMethod: String
      intervalStartTimeOfDay: Int
      intervalStartEpoch: Int
      intervalStartCountdown: Int
      intervalStopMethod: String
      intervalStopTimeOfDay: Int
      intervalStopEpoch: Int
      intervalStopCountdown: Int
      intervalInterval: Int
      createdAt: String
      updatedAt: String
    }

    input UpdateUser {
      id: Int!
      name: String
      email: String
      password: String
      createdAt: String
      updatedAt: String
    }
    input UpdateDevice {
      id: Int!
      title: String
      deviceSerial: String
      createdAt: String
      updatedAt: String
    }
    input UpdatePhoto {
      id: Int!
      title: String
      longitude: Float
      latitude: Float
      deviceId: Int
      groupId: Int
      orderInGroup: Int
      comment: String
      imageFile: String
      altitude: Float
      bearing: Float
      createdAt: String
      updatedAt: String
    }
    input UpdateComment {
      id: Int!
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
      orderInGroup: Int
      createdAt: String
      updatedAt: String
    }
    input UpdateGroup {
      id: Int!
      title: String
      longitude: Float
      latitude: Float
      groupId: Int
      createdAt: String
      updatedAt: String
    }
    input UpdateLogCamConfig {
      id: Int!
      title: String
      deviceId: Int
      intervalStartMethod: String
      intervalStartTimeOfDay: Int
      intervalStartEpoch: Int
      intervalStartCountdown: Int
      intervalStopMethod: String
      intervalStopTimeOfDay: Int
      intervalStopEpoch: Int
      intervalStopCountdown: Int
      intervalInterval: Int
      createdAt: String
      updatedAt: String
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
    input DestroyLogCamConfig {
      id: Int!
    }

    type Query {
        ReadUser(type: InputUser): [User]
        ReadDevice(type: InputDevice): [Device]
        ReadPhoto(type: InputPhoto): [Photo]
        ReadComment(type: InputComment): [Comment]
        ReadGroup(type: InputGroup): [Group]
        ReadLogCamConfig(type: InputLogCamConfig): [LogCamConfig]
    }

    type Mutation {
        CreateUser(input: InputUser): Boolean
        CreateDevice(input: InputDevice): Boolean
        CreatePhoto(input: InputPhoto): Boolean
        CreateComment(input: InputComment): Boolean
        CreateGroup(input: InputGroup): Boolean
        CreateLogCamConfig(input: InputLogCamConfig): Boolean

        UpdateUser(input: UpdateUser): User
        UpdateDevice(input: UpdateDevice): Device
        UpdatePhoto(input: UpdatePhoto): Photo
        UpdateComment(input: UpdateComment): Comment
        UpdateGroup(input: UpdateGroup): Group
        UpdateLogCamConfig(input: UpdateLogCamConfig): LogCamConfig

        DestroyUser(input: DestroyUser): Boolean
        DestroyDevice(input: DestroyDevice): Boolean
        DestroyPhoto(input: DestroyPhoto): Boolean
        DestroyComment(input: DestroyComment): Boolean
        DestroyGroup(input: DestroyGroup): Boolean
        DestroyLogCamConfig(input: DestroyLogCamConfig): Boolean
    }
`