//Course list table

const Table = ({data}) => {
    return(
        <table>
            <thead>
            <tr>
                <th style={{padding: '8px'}}>Term</th>
                <th style={{padding: '8px'}}>Course Code</th>
                <th style={{padding: '8px'}}>Name</th>
                <th style={{padding: '8px'}}>Weekday</th>
                <th style={{padding: '8px'}}>Start Time</th>
                <th style={{padding: '8px'}}>End Time</th>
                <th style={{padding: '8px'}}>Place</th>
                <th style={{padding: '8px'}}>Department</th>
                <th style={{padding: '8px'}}>Instructor</th>
                <th style={{padding: '8px'}}>Capacity</th>
                <th style={{padding: '8px'}}>Current Capacity</th>
                <th style={{padding: '8px'}}>Description</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.cid}>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.Term}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.cid}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.name}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.date}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.startTime}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.endTime}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.place}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.department}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.instructor}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.capacity}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.current_capacity}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;