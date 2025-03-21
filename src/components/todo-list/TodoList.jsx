import React, { useContext } from 'react';
import styles from './TodoList.module.css';
import { TodoItem } from '../';
import { AppContext } from '../../context';

export function TodoList() {
	const { todos } = useContext(AppContext);

	return (
		<ul className={styles.todoList}>
			{todos.length === 0 ? (
				<p className={styles.empty}>Задач не найдено</p>
			) : (
				todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
			)}
		</ul>
	);
}
