export const todoHeader = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 0.2,
    editable: true,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    type: "date",
    flex: 0.2,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 0.2,
  },
];

export const todoData = [
  { id: 1, title: "Snow", status: "Jon", dueDate: "10/12/2021" },
  { id: 2, title: "Lannister", status: "Cersei", dueDate: "10/10/2021" },
  { id: 3, title: "Lannister", status: "Jaime", dueDate: "10/10/2021" },
  { id: 4, title: "Stark", status: "Arya", dueDate: "10/10/2021" },
  { id: 5, title: "Targaryen", status: "Daenerys", dueDate: "10/10/2021" },
  { id: 6, title: "Melisandre", status: "Something", dueDate: "10/10/2021" },
  { id: 7, title: "Clifford", status: "Ferrara", dueDate: "10/10/2021" },
  { id: 8, title: "Frances", status: "Rossini", dueDate: "10/10/2021" },
  { id: 9, title: "Roxie", status: "Harvey", dueDate: "10/10/2021" },
];
