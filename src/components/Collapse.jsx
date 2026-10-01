import { useState } from 'react';
import '../styles/Collapse.scss';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <button
                className="collapse-title"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span className={isOpen ? 'arrow arrow-open' : 'arrow'}>
                    ❯
                </span>
            </button>

            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default Collapse;