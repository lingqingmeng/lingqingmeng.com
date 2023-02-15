import React, { useEffect } from 'react';

// class Download extends Component {
//   render() {
//     return (
//         <div className = "App">
//           <a href = {Pdf} target = "_blank" download="ConfidenceInternals.pdf" rel="noopener noreferrer">Download Pdf</a>
//         </div>
//     );
//   }
// }

function DownloadComponent() {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = '../documents/ConfidenceIntervals.pdf';
    link.download = 'ConfidenceIntervals.pdf';
    link.click();
  }, []);

  return <div>Your file will download automatically...</div>;
}


export default DownloadComponent;