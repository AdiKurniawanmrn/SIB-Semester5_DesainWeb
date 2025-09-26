
import { users } from "./data.js";

// Menampilkan data
const index = () => {
  const tableBody = document.getElementById("user-body");
  tableBody.innerHTML = "";

  users.map((user, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${i + 1}</td>
        <td>${user.nama}</td>
        <td>${user.umur}</td>
        <td>${user.alamat}</td>
        <td>${user.email}</td>
        <td>
          <button class="btn-edit" onclick="editUser(${i})">✏️ Edit</button>
          <button class="btn-delete" onclick="deleteUser(${i})">🗑️ Hapus</button>
        </td>
      `;
    tableBody.appendChild(row);
  });
};

// Menambah data
const store = (user) => {
  users.push(user);
};
store({
  nama: "Tristan",
  umur: 27,
  alamat: "Bandung",
  email: "Tristan@email.com",
});

store({
  nama: "Memo",
  umur: 30,
  alamat: "Yogyakarta",
  email: "Memo@email.com",
});

// Update data berdasarkan index
const update = (index, user) => {
  users[index] = user;
};

// Hapus data berdasarkan index
const destroy = (index) => {
  users.splice(index, 1);
};

export { index, store, update, destroy, users };
