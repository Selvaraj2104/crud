import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
// import { createLogger } from 'vite';

function CrudTable(bcd) {
    const [tableData, setTableData] = useState(null);

    useEffect(() => {
        fetch('https://67d7ed0d9d5e3a10152c9ab3.mockapi.io/employee/detail', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Failed to fetch data');
            })
            .then(data => {
                setTableData(data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [bcd.update]);

    console.log(tableData, "TableData");

    const deleteUser = (id) =>{
        
fetch(`https://67d7ed0d9d5e3a10152c9ab3.mockapi.io/employee/detail/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // Do something with deleted task
    alert("Deleted Successfully...")
    bcd.setUpdate(!bcd.update)
  }).catch(error => {
    // handle error
    console.log(error)
  })
    }

    return (
        <div className="container-fluid">
            <Button variant='primary' className='fs-5 mb-3' onClick={()=>bcd.boxClick()}>Add Data</Button>
            <Table striped bordered hover variant='dark'>
                <thead className='text-center'>
                    <tr className='fs-3'>
                        <th className='p-3 bg-secondary'>S.No</th>
                        <th className='p-3 bg-secondary'>Name</th>
                        <th className='p-3 bg-secondary'>Email id</th>
                        <th className='p-3 bg-secondary'>Phone no</th>
                        <th className='p-3 bg-secondary'>Qualification</th>
                        <th className='p-3 bg-secondary'>Location</th>
                        <th className='p-3 bg-secondary'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData && tableData.map((item, i) => (
                        <tr key={item.id} className='text-center p-2 fs-5'>
                            <td className='p-3'>{i + 1}</td>
                            <td className='p-3'>{item.name}</td>
                            <td className='p-3'>{item.emailid}</td>
                            <td className='p-3'>{item.phoneNo}</td>
                            <td className='p-3'>{item.qualification}</td>
                            <td className='p-3'>{item.location}</td>
                            <td className='p-3'>
                                <Button variant='success me-3' onClick={() => bcd.boxClick(item)}> Edit</Button>
                                <Button variant='danger' onClick={()=>deleteUser(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CrudTable;
