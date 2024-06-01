'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from '../components/UserList'
import Pagination from '../components/Pagination'
import styles from './styles/Home.module.css'

const Home: React.FC = () => {
  const [users, setUsers] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(10)

  const fetchUsers = async (page: number) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://give-me-users-forever.vercel.app/api/users/${page}/next`
      )
      console.log('API response:', response.data)
      setUsers(response.data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(page)
  }, [page])

  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages))
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1))
  const handlePageClick = (pageNumber: number) => setPage(pageNumber)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <UserList users={users} />
      )}
      <Pagination
        page={page}
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={totalPages}
        handlePageClick={handlePageClick}
      />
    </div>
  )
}

export default Home
