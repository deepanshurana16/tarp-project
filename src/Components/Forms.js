import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { loadAllCategory } from '../Services/CategoryService';
import { loadAllBlocks } from '../Services/BlockService';
import { createIssue } from '../Services/PostService';
import { toast } from 'react-toastify';
import { styled } from '@mui/system';

// Custom styled components
const CustomBox = styled(Box)({
    padding: "20px",
    backgroundColor: "#f0f8ff", 
    borderRadius: "8px", 
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
    maxHeight: "90vh", 
    overflow: "auto", 
});

const CustomButton = styled(Button)({
    marginTop: "10px", 
    backgroundColor: "#3f51b5", 
    '&:hover': {
        backgroundColor: "#2c387e", 
    },
});

function Forms() {
    // structure
    const [post, setPost] = useState({
        username: "",
        regno: "",
        room: "",
        content: ""
    });
    const [category, setCategory] = useState([]);
    const [block, setBlock] = useState([]);

    const handleChange = (event, property) => {
        setPost({ ...post, [property]: event.target.value });
    }

    // load all categories
    const loadCategories = () => {
        loadAllCategory().then((data) => {
            setCategory(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    // load all blocks
    const loadBlocks = () => {
        loadAllBlocks().then((data) => {
            setBlock(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        loadCategories();
        loadBlocks();
    }, []); 

    // set Ids
    const [categoryId, setCategoryId] = useState('');
    const [blockId, setBlockId] = useState('');

    const reset = () => {
        setPost({
            username: "",
            regno: "",
            room: "",
            content: ""
        })
        setCategoryId('');
        setBlockId('');
    }

    // submit button
    const handleSubmit = () => {
        createIssue(post, categoryId, blockId).then((data) => {
            toast.success("Issue created successfully")
            reset();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <CustomBox width="60%">
            <Stack spacing={2}> 
                <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="#3f51b5">
                    Complaint Form
                </Typography>
                <TextField 
                    label="Name" 
                    variant="filled" 
                    value={post.username} 
                    onChange={(e) => handleChange(e, "username")} 
                    sx={{ bgcolor: '#fff', borderRadius: '4px' }} 
                />
                <TextField 
                    label="Registration Number" 
                    variant="filled" 
                    value={post.regno} 
                    onChange={(e) => handleChange(e, "regno")} 
                    sx={{ bgcolor: '#fff', borderRadius: '4px' }}
                />
                <TextField 
                    label="Room Number" 
                    variant="filled" 
                    value={post.room} 
                    onChange={(e) => handleChange(e, "room")} 
                    sx={{ bgcolor: '#fff', borderRadius: '4px' }}
                />
                <TextField 
                    label="Problem Description" 
                    variant="filled" 
                    value={post.content} 
                    multiline 
                    rows={4} 
                    onChange={(e) => handleChange(e, "content")} 
                    sx={{ bgcolor: '#fff', borderRadius: '4px' }}
                />

                <FormControl variant='filled' fullWidth>
                    <InputLabel>Category of Problem</InputLabel>
                    <Select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        sx={{ bgcolor: '#fff', borderRadius: '4px' }}
                    >
                        {category.map((cat) => (
                            <MenuItem key={cat.cid} value={cat.cid}>
                                {cat.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl variant='filled' fullWidth>
                    <InputLabel>Block</InputLabel>
                    <Select
                        value={blockId}
                        onChange={(e) => setBlockId(e.target.value)}
                        sx={{ bgcolor: '#fff', borderRadius: '4px' }}
                    >
                        {block.map((cat) => (
                            <MenuItem key={cat.bid} value={cat.bid}>
                                {cat.blockname}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <CustomButton variant="contained" color='success' onClick={handleSubmit}>
                    Submit Form
                </CustomButton>
            </Stack>
        </CustomBox>
    )
}

export default Forms;