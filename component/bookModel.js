import React from 'react'
// import { Table } from 'reactstrap'

class bookModel extends React.Component {
    render = () => {
        return (
            <>
                <h1>book Model</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>pages</th>
                            <th>inChart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookModel.length > 0 && this.props.bookModel.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.pages}</td>
                                    <td>{item.inchart}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </> 
        )
    }
}

export default bookModel
