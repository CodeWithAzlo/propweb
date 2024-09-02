import React from 'react';
import './ProposalApp.css'; // Import the CSS file
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

const ProposalApp = () => {
    const handleYes = () => {
        toast.success("Do you become My Sweet  friend hhhhh?");
    };

    const handleNo = () => {
        // No action on clicking No button
    };

    return (
        <div className="proposalApp">
            <div className="popup">
                <div className="popup-content">
                    <h1>Do you love me?</h1>
                    <div className="button-group">
                        {/* Yes button */}
                        <button 
                            onClick={handleYes} 
                            className="btn yes-btn"
                        >
                            Yes
                        </button>
                        {/* No button */}
                        <button 
                            onClick={handleNo} 
                            className="btn no-btn"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer for toast notifications */}
        </div>
    );
};

export default ProposalApp;
