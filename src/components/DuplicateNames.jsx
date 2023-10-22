import React, { useState, useEffect } from 'react';

const DuplicateName = () => {
    const [data, setData] = useState([]);

    const mockData = [
        { name: 'Sumit' },
        { name: 'Sid' },
        { name: 'Sumit' },
        { name: 'Ketan' },
        { name: 'Kartik' },
        { name: 'Ketan' },
        { name: 'Kartik' },
        { name: 'Ketan' },
        { name: 'Kartik' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
        { name: 'Ketan' },
    ];

    const showDuplicate = () => {
        setData(mockData)
    }

    useEffect(() => {
        showDuplicate();
    }, []);

    const countDuplicates = (name) => {
        return data.filter((item) => item.name === name).length;
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Duplicate Count</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        const name = item.name;
                        const duplicateCount = countDuplicates(name);

                        let rowClass = '';
                        if (duplicateCount > 0 && duplicateCount < 3) {
                            rowClass = 'red';
                        } else if (duplicateCount >= 3 && duplicateCount < 10) {
                            rowClass = 'yellow';
                        } else if (duplicateCount >= 10) {
                            rowClass = 'green';
                        }

                        return (
                            <tr key={index}
                                style={{ backgroundColor: rowClass }}
                            >
                                <td>{name}</td>
                                <td>{duplicateCount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DuplicateName;