const Table = ({data}) => {
    return(
        <table>
                <thead>
                <tr>
                    <th style={{padding: '8px'}}>cid</th>
                    <th style={{padding: '8px'}}>name</th>
                    <th style={{padding: '8px'}}>Term</th>
                    <th style={{padding: '8px'}}>Date</th>
                    <th style={{padding: '8px'}}>startTime</th>
                    <th style={{padding: '8px'}}>endTime</th>
                    <th style={{padding: '8px'}}>place</th>
                    <th style={{padding: '8px'}}>Department</th>
                    <th style={{padding: '8px'}}>instructor</th>
                    <th style={{padding: '8px'}}>capacity</th>
                    <th style={{padding: '8px'}}>current_capacity</th>
                    <th style={{padding: '8px'}}>description</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.cid}>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.cid}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.name}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.Term}</td>
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