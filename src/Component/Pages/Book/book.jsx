import booksData from "../../../Utils/book.js";
import styles from "./book.module.css";

function Book() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Daftar Buku</h2>
      <div className={styles.grid}>
        {booksData.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.image} alt={book.title} className={styles.image} />
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p>({book.year})</p>
            <p className={styles.price}>
              Rp {book.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
