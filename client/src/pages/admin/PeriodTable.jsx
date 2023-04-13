const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ padding: '8px' }}>Starting Date</th>
                    <th style={{ padding: '8px' }}>Starting Time</th>
                    <th style={{ padding: '8px' }}>Ending Date</th>
                    <th style={{ padding: '8px' }}>Ending Time</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item) => (
                    <tr key={item.cid}>
                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{new Date(item.start_date).toISOString().split('T')[0]}</td>
                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.start_time}</td>
                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{new Date(item.end_date).toISOString().split('T')[0]}</td>
                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.end_time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;