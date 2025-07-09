import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: '3.218.78.185',
  user: 'orders_user',
  password: 'strongpassword',
  database: 'orders_db'
})

const resolvers = {
  Query: {
    async getOrdersByUser(_, { userId }) {
      const [rows] = await pool.query(
        'SELECT * FROM orders WHERE userId = ? ORDER BY created_at DESC',
        [userId]
      )
      return rows.map(order => ({
        ...order,
        created_at: new Date(order.created_at).toISOString()
      }))
    }
  }
}

export default resolvers