import pool from '../config/config';

const getAll = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tasks');
    return result.rows;
  } finally {
    client.release();
  }
};

export default {
  getAll
};
