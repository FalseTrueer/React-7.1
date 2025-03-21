import React from 'react';
import { useTodos } from '../hooks';
import styles from './App.module.css';
import { TodoList } from '../components';
import { AppContext } from '../context';

function App() {
	const todosData = useTodos();
	const {
		isLoading,
		newTodo,
		setNewTodo,
		isCreating,
		addTodo,
		searchQuery,
		setSearchQuery,
		isSorted,
		setIsSorted,
		todos,
		updateTodo,
		deleteTodo,
	} = todosData;

	return (
		<AppContext.Provider value={todosData}>
			{/* Использование просто AppContext не получилось, видимо проблемы с версиями */}
			<div className={styles.app}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					<>
						<div className={styles.controls}>
							<input
								type="text"
								className={styles.search}
								placeholder="Поиск по задачам..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button
								className={styles.btn}
								onClick={() => setIsSorted(!isSorted)}
							>
								{isSorted ? 'Отключить сортировку' : 'Сортировать A-Z'}
							</button>
						</div>

						<TodoList />

						<form className={styles.form} onSubmit={addTodo}>
							<input
								type="text"
								className={styles.input}
								value={newTodo}
								onChange={(e) => setNewTodo(e.target.value)}
								placeholder="Введите задачу"
							/>
							<button
								type="submit"
								className={styles.btn}
								disabled={isCreating}
							>
								{isCreating ? 'Добавление...' : 'Добавить'}
							</button>
						</form>
					</>
				)}
			</div>
		</AppContext.Provider>
	);
}

export default App;
