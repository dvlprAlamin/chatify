/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type ChatsParamList = {
  Chats: undefined;
};

export type StatusParamList = {
  Status: undefined;
};
export type CallsParamList = {
  Calls: undefined;
};
export type User = {
  id: String,
  name:String,
  imageURL:String
}
export type Message = {
  id: String,
  content: String,
  createdAt: Number
}

export type ChatRoom = {
  id: String,
  user: [User],
  lastMessage: Message
}