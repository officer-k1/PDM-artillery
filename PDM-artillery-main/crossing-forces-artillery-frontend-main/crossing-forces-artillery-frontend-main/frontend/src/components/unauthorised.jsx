import React from "react";

const UnauthorizedPage = () => {
    return (
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
        <h1>Unauthorized</h1>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  };
  
  export default UnauthorizedPage;