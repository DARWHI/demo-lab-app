import { useState, useEffect } from 'react';
import { WorkStation } from '../components/workstation';
import { Schedule } from '../components/schedule';
import { staticData } from '../data.js';
import { store } from '../store/store';
import { Provider } from 'react-redux';

export const ComputerLab = () => {

    const [selectedWorkstation, setSelectedWorkstation] = useState('');

    const handleWorkstationSelection = id => {
        setSelectedWorkstation(id);
    };

    return (
        <Provider store={store}>
            <div className="page-section">
                <div className="page-section-title">Workstations</div>
                <ul>
                    {
                        staticData.workstations.map(
                            ws =>
                                <li
                                    className={"workstation-container " + (selectedWorkstation === ws.id ? 'workstation-selected' : '')}
                                    key={ws.id}
                                    onClick={() => handleWorkstationSelection(ws.id)}>
                                    <WorkStation id={ws.id} deskNumber={ws.deskNumber} />
                                </li>
                        )
                    }
                </ul>
                <Schedule workstationId={selectedWorkstation} />
            </div>
        </Provider >
    )
};