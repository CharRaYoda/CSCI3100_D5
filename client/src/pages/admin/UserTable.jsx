const UserTable = ({data}) => {
    return(
        <table>
            <thead>
                {/* Column Names for Users*/}
            <tr>
                <th style={{padding: '8px'}}>uid</th>
                <th style={{padding: '8px'}}>name</th>
                <th style={{padding: '8px'}}>email</th>
                <th style={{padding: '8px'}}>role</th>
            </tr>
            </thead>
            {/* Map over the data array to generate table rows */}
            <tbody>
            {data.map((item) => (
                <tr key={item.cid}>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.uid}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.name}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.email}</td>
                <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{item.role}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserTable;