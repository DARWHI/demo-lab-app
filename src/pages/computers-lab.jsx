import { useState } from 'react';
import { WorkStation } from '../components/workstation';
import { Schedule } from '../components/schedule';
import { staticData } from '../data.js';

export const ComputerLab = () => {

    const [selectedWorkstation, setSelectedWorkstation] = useState('')

    const handleWorkstationSelection = id => {
        setSelectedWorkstation(id)
    };

    return (
        <div>
            Computer Lab
            <ul>
                {
                    staticData.workstations.map(
                        ws => <li className={"workstation-container " +( selectedWorkstation === ws.id ? 'workstation-selected' : '') } key={ws.id} onClick={() => handleWorkstationSelection(ws.id)}>
                            <WorkStation id={ws.id} deskNumber={ws.deskNumber} />
                        </li>
                    )
                }
            </ul>
            <Schedule workstationId={selectedWorkstation} />
        </div>
    )
};