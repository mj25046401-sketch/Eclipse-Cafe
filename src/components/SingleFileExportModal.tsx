import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, Sparkles, FileCode } from 'lucide-react';
import { getStandaloneHtmlCode } from '../utils/standaloneHtml';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const standaloneCode = getStandaloneHtmlCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneCode], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'eclipse-cafe-single-page.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="export-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-[#12141E] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-[#0E1018] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base">
                Standalone Executable HTML Code
              </h3>
              <p className="text-xs text-slate-400">
                Self-contained HTML5 file with Tailwind CDN and vanilla JavaScript.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close export modal"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-5 py-3 bg-[#161924] border-b border-slate-800 flex items-center justify-between flex-wrap gap-3 text-xs">
          <span className="text-slate-300 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ready to save as <code>index.html</code> or open in any browser</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? 'Copied Code!' : 'Copy Entire Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-extrabold transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 p-4 bg-[#090A0F] overflow-y-auto font-mono text-[11px] text-slate-300 select-all leading-relaxed">
          <pre className="whitespace-pre-wrap">{standaloneCode}</pre>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#0E1018] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>File size: ~28 KB • Zero build dependencies needed</span>
          <button
            onClick={onClose}
            className="text-amber-400 hover:underline font-bold"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
