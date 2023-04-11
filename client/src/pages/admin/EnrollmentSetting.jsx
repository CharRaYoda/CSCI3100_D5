import React from 'react';

const EnrollmentSetting = () => {
    return (
        <div>
            <h1>Enrollment Setting</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
                    <a> On Hold</a>
                </div>
            </div>
        </div>
   );
};

export default EnrollmentSetting;