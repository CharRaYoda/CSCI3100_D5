const UserTable = ({data}) => {
    return(
        <table>
                <thead>
                <tr>
                    <th style={{padding: '8px'}}>uid</th>
                    <th style={{padding: '8px'}}>email</th>
                    <th style={{padding: '8px'}}>role</th>
                    <th style={{padding: '8px'}}>gpa</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.cid}>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.uid}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.email}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.role}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.gpa}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    );
};

export default UserTable;