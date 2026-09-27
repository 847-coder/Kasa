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

            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Collapse;