import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useGetEventsQuery } from '../../features/events/eventsSlice';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo,selectSearchParam } from "../../features/events/GlobalSlice";
import { TablePagination, TableSortLabel,
    TableCell,TableContainer,Table,TableHead,TableRow,TableBody,Paper } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageEventsList = () => {
   
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortBy , setSortBy ] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');
    const navigate = useNavigate();

    const handleSort = (property) => {
        setSortBy(property);
        setSortDirection(sortBy === property && sortDirection === 'asc' ? 'desc' : 'asc');

        console.log(property + sortDirection);
    }
    const handleEdit = (row) => {
        console.log(row);
        navigate(`/manage/event/${row.id}`);
    }

    const handleDelete = () => {

    }

    const handlePageChange= (event, newpage) => {
      
        setPage(newpage); // update state with new page number
    }

    const handleRowsPerPageChange= (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const sp = useSelector(selectSearchParam);

    const {
        data: Events,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetEventsQuery({"keyword":"all","category":"all","location":"all"})



    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        
        if(!Events.length)
        {
           
            content = <p className="center">No events found for the keyword entered!!</p>
        }
        else 
        {

            // const sortedData = stableSort(data, getComparator(order, orderBy));
            
            const sortedData = [...Events].sort((a, b) => {
            const order = sortDirection === 'asc' ? 1 : -1;
            return a[sortBy] > b[sortBy] ? order : -order;
            });
            
            
            const pageData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
       
            content = <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>
                    <TableSortLabel
                        active={sortBy === 'id'}
                        direction={sortDirection}
                        onClick={() => handleSort('id')}
                    >
                        ID
                    </TableSortLabel>
                    </TableCell>
                    <TableCell>
                    <TableSortLabel
                        active={sortBy === 'title'}
                        direction={sortDirection}
                        onClick={() => handleSort('title')}
                    >
                        Title
                    </TableSortLabel>
                    </TableCell>
             
                    <TableCell>Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {pageData.map(row => (
                    <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>
                        <EditIcon onClick={() => handleEdit(row)}>
                     
                        </EditIcon>
                        <DeleteIcon onClick={() => handleDelete(row.id)}>
                        
                        </DeleteIcon>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
           
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={Events.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                />
            </TableContainer>

            // content = pageData.map(event => 

            //     <h3>{event.title}</h3>
              
                 
            //      )
        }
       
    
    } else if (isError) {
        content = <p>{error}</p>;
    }

  

    return (
        <>
        
     
        <section className="bg-white">
         
          <div className="inner-wrapper">

          <h2>Manage Events</h2>
       
          <div className="manate-event-list">
            {content}
          </div>  

          </div>
        </section>

       
        </>
    )
}
export default ManageEventsList