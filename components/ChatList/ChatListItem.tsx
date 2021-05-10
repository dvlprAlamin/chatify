import React from "react";
import { ChatRoom } from "../../types";
import { Text, View } from "../Themed";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    return (
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
};

export default ChatListItem;