"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker with HTTPS CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFThumbnailProps {
  fileName: string;
  onLoadSuccess?: () => void;
  onLoadError?: () => void;
}

export function PDFThumbnail({
  fileName,
  onLoadSuccess,
  onLoadError,
}: PDFThumbnailProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-border">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
      )}
      <Document
        file={`/certificates/${fileName}`}
        onLoadSuccess={() => {
          setIsLoading(false);
          onLoadSuccess?.();
        }}
        onLoadError={(error) => {
          console.error("Thumbnail load error:", error);
          setIsLoading(false);
          onLoadError?.();
        }}
        loading={null}
        error={
          <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
            PDF preview unavailable
          </div>
        }
      >
        <Page
          pageNumber={1}
          scale={0.5}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={250}
        />
      </Document>
    </div>
  );
}
