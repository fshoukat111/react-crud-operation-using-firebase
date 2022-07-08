import React, { useState } from "react";
import './add-todo.css'
import { TodoList } from "../todo-list/todo-list";
import {
    FormControlLabel,
    FormGroup,
    TextField,
    Checkbox,
    Button,
    Grid
} from '@mui/material';
import { todoService } from '../../services/TodoServices';

export const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };

    const handleChangeCompleted = (e) => {
        setCompleted(e.target.checked);
    };



    const saveTodo = () => {
        let data = {
            title: title,
            content: content,
            completed: completed
        };
        todoService.createTodo(data);
        resetTodo();

    };

    const resetTodo = () => {
        setTitle('');
        setContent('');
        setCompleted(false);
        // setSubmitted(false);
    };



    return (
        <div className="form-container">
            <form>
                <Grid container alignItems="center" justify="center" direction="column" >
                    <h1>Todo Form</h1>
                    <Grid item>
                        <TextField
                            id="title"
                            name="title"
                            label="Title"
                            type="text"
                            value={title}
                            onChange={handleChangeTitle}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="content"
                            name="content"
                            label="Content"
                            type="text"
                            value={content}
                            onChange={handleChangeContent}
                        />
                    </Grid>
                    <Grid item>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="completed" value={completed} onChange={handleChangeCompleted} />} label="completed" />
                        </FormGroup>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={saveTodo} style={{
                            backgroundColor: "green",
                            margin: "5px"
                        }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
