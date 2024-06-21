import pool from '../config/config';

interface Task {
  title: string;
}

const getAll = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tasks');
    return result.rows;
  } finally {
    client.release();
  }
};

const createTask = async (task: Task) => {
  const client = await pool.connect();
  try {
    const { title } = task;
    const dateUTC = new Date().toISOString();

    const query = 'INSERT INTO tasks (title, status, created_at) VALUES ($1, $2, $3) RETURNING *';

    const result = await client.query(query, [title, 'pendente', dateUTC]);
    return {insertId: result.rows[0].id };
  } finally {
    client.release();
  }
};

const deleteTask = async (id : any) =>{
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM tasks WHERE id = $1', [id]);
    return result;
  } finally {
    client.release();
  }

};

export default {
  getAll,
  createTask,
  deleteTask,
};
