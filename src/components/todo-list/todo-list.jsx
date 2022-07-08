import React, { useState, useEffect } from 'react'
import { todoService } from '../../services/TodoServices'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './todo-list.css';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [editSingleTodo, setEditSingleTodo] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const data = await todoService.getAllTodos();
    const todoList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setTodos(todoList)
  }

  const deleteTodo = (id) => {
    todoService.deleteTodo(id);
    getTodos();
  }

  const editTodo = (todo) => {
    handleClickOpen();
    setEditSingleTodo(todo)
  }

  const updateTodo = (todo) => {
    debugger
    todoService.updateTodo(todo.id, todo);
    handleClose();
    // setTodo(todo);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    getTodos();
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Content</TableCell>
              <TableCell align="right">Completed</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.content}</TableCell>
                <TableCell align="right"><Checkbox name="completed" checked={row.completed} disabled /></TableCell>
                <TableCell align="right">
                  <DeleteIcon onClick={e => deleteTodo(row.id)} />
                  <EditIcon onClick={e => editTodo(row)} />


                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              // autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={editSingleTodo?.title}
              onChange={e => setTodo(e.target.value)}
            />
            <TextField
              // autoFocus
              margin="dense"
              id="content"
              label="Content"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={editSingleTodo?.content}
            />
            <Checkbox name="completed" defaultChecked={editSingleTodo?.completed} label="Completed" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={e => updateTodo(editSingleTodo)}>Update</Button>

        </DialogActions>
      </Dialog>
    </>
  )
}

