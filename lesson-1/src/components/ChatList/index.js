import { List, ListItem } from "@mui/material";
import "./styles.scss"

const chats = [
	{
		name: 'Чат №1',
		id: 'chat1'
	},
	{
		name: 'Чат №2',
		id: 'chat2'
	},
	{
		name: 'Чат №3',
		id: 'chat3'
	},
	{
		name: 'Чат №4',
		id: 'chat4'
	},
	{
		name: 'Чат №5',
		id: 'chat5'
	}
];

export const ChatList = () => (
	<List className='App-chats'>
		{chats.map(chat => <ListItem className='App-chats__link' key={chat.id}>{chat.name}</ListItem>)}
	</List>
)