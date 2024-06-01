import React from 'react'
import styles from '../app/styles/Pagination.module.css'

interface PaginationProps {
  page: number
  handleNext: () => void
  handlePrev: () => void
  totalPages: number
  handlePageClick: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  handleNext,
  handlePrev,
  totalPages,
  handlePageClick,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={handlePrev}
        disabled={page === 1}
      >
        Previous
      </button>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${styles.button} ${
            page === pageNumber ? styles.active : ''
          }`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={styles.button}
        onClick={handleNext}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
