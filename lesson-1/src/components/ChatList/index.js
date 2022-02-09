import { Link, Outlet } from "react-router-dom";
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
	<>
		<section className="chat">
			<div className="chat__content">
				<ul className='chat__list'>
					{chats.map((chat) => (
						<li className='chat__item' key={chat.id}>
							<Link className='chat__link' to={`/chats/${chat.id}`}>{chat.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
		<Outlet />
	</>
);