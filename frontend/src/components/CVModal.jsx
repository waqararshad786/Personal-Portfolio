import React from 'react';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Use backend URL (make sure your backend serves the PDF at /uploads/Waqar_CV.pdf)
  const pdfUrl = `${import.meta.env.VITE_API_URL}/uploads/Waqar_CV.pdf`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div className="bg-[#0f0f1a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-white/20" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-[#0f0f1a] p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Waqar Arshad - Resume</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">&times;</button>
        </div>
        <div className="p-4">
          <iframe src={pdfUrl} className="w-full h-[70vh] rounded-lg" title="CV Preview" />
        </div>
        <div className="p-4 border-t border-white/10 flex gap-3 justify-center">
          <button onClick={onClose} className="px-5 py-2 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10">Close</button>
          <a href={pdfUrl} download="Waqar_Arshad_CV.pdf" className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold hover:shadow-lg">Download PDF</a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;