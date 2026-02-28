import React from 'react'
import Table from 'react-bootstrap/Table';

export default function TableData({ userData }) {
    return (
        <>
            <Table striped bordered hover variant="">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.length > 0
                        ?
                        userData.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.mobile_number}</td>
                                    <td>{value.address}</td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td colSpan={5} className='text-center'>No Record Found !!</td>
                        </tr>
                    }

                </tbody>
            </Table>
        </>
    )
}
