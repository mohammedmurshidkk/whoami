'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileDown, Award, Eye, ArrowLeft, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '@/lib/certificates';
import dynamic from 'next/dynamic';

const PDFViewerModal = dynamic(
  () => import('@/components/PDFViewerModal').then(m => ({ default: m.PDFViewerModal })),
  { 
    ssr: false,
    loading: () => null
  }
);

const PDFThumbnail = dynamic(
  () => import('@/components/PDFThumbnail').then(m => ({ default: m.PDFThumbnail })),
  { 
    ssr: false,
    loading: () => <div className="w-full h-48 bg-muted rounded-lg animate-pulse" />
  }
);

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    id: string;
    fileName: string;
    name: string;
  } | null>(null);

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-primary" size={24} />
            <h1 className="text-2xl md:text-4xl font-bold">Certificates & Achievements</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Professional certifications and recognition of my achievements and contributions
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CERTIFICATES.length > 0 ? (
            CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="group flex flex-col rounded-lg border border-border hover:border-primary/30 bg-card hover:shadow-md transition-all overflow-hidden"
              >
                <div className="w-full bg-muted/50">
                  <PDFThumbnail fileName={cert.fileName} />
                </div>

                <div className="flex flex-col flex-1 p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-4 flex-1">
                    <p>
                      <span className="font-medium">Issuer:</span> {cert.issuer}
                    </p>
                    <p>
                      <span className="font-medium">Issued:</span> {cert.issueDate}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-border">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setSelectedCertificate({
                            id: cert.id,
                            fileName: cert.fileName,
                            name: cert.name,
                          })
                        }
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        <Eye size={16} />
                        <span className="hidden sm:inline">Quick View</span>
                      </button>
                      <a
                        href={`/certificates/${cert.fileName}`}
                        download={cert.fileName}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        <FileDown size={16} />
                        <span className="hidden sm:inline">Download</span>
                      </a>
                    </div>
                    <Link
                      href={`/certificates/${cert.id}`}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Full Page & Share Link
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-12 rounded-lg border border-dashed border-border text-center">
              <Award className="mx-auto mb-4 text-muted-foreground" size={32} />
              <p className="text-muted-foreground">No certificates to display yet</p>
            </div>
          )}
        </div>

        <div className="mt-12 md:mt-16 p-6 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm md:text-base text-muted-foreground">
            💡 <span className="font-medium">Tip for employers:</span> Many job descriptions ask for links to certificates. 
            You can directly share the certificate PDF links from this page with potential employers. Use the <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">View</span> button to preview before sharing.
          </p>
        </div>
      </div>

      {selectedCertificate && (
        <PDFViewerModal
          fileName={selectedCertificate.fileName}
          certificateName={selectedCertificate.name}
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}
