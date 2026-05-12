"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

// Configure PDF.js worker with HTTPS CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerModalProps {
  fileName: string;
  certificateName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PDFViewerModal({
  fileName,
  certificateName,
  isOpen,
  onClose,
}: PDFViewerModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error("PDF Load Error:", err);
    setError("Failed to load PDF. Please check the file path and try again.");
  }

  const handlePrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || prev));
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-4xl h-screen max-h-[90vh] flex flex-col p-0 border-0 rounded-lg overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-border flex items-center justify-between flex-shrink-0">
          <DialogTitle className="flex-1 truncate">{certificateName}</DialogTitle>
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
              className="p-2 hover:bg-muted rounded-md disabled:opacity-50 transition-colors"
              title="Zoom out"
            >
              <ZoomOut size={18} />
            </button>
            <span className="text-sm font-medium min-w-[3rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 2}
              className="p-2 hover:bg-muted rounded-md disabled:opacity-50 transition-colors"
              title="Zoom in"
            >
              <ZoomIn size={18} />
            </button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-auto bg-muted/30 flex items-center justify-center p-4">
          {error ? (
            <div className="text-center max-w-md">
              <p className="text-destructive font-semibold mb-2">⚠️ {error}</p>
              <p className="text-sm text-muted-foreground mb-4">File: {fileName}</p>
              <p className="text-xs text-muted-foreground">Make sure the PDF file is in /public/certificates/</p>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <Document
                file={`/certificates/${fileName}`}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading PDF...</p>
                    </div>
                  </div>
                }
                error={
                  <div className="flex items-center justify-center h-96">
                    <div className="text-center text-destructive">
                      <p>Failed to load PDF</p>
                      <p className="text-xs mt-2">Check console for details</p>
                    </div>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          )}
        </div>

        {!error && numPages && numPages > 1 && (
          <div className="px-6 py-4 border-t border-border flex items-center justify-between flex-shrink-0">
            <button
              onClick={handlePrevPage}
              disabled={pageNumber === 1}
              className="p-2 hover:bg-muted rounded-md disabled:opacity-50 transition-colors"
              title="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium">
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={pageNumber === numPages}
              className="p-2 hover:bg-muted rounded-md disabled:opacity-50 transition-colors"
              title="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
