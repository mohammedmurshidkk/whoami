'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import { FileDown, Award, ArrowLeft, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { CERTIFICATES } from '@/lib/certificates';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

const PDFThumbnail = dynamic(
  () => import('@/components/PDFThumbnail').then(m => ({ default: m.PDFThumbnail })),
  { 
    ssr: false,
    loading: () => <div className="w-full aspect-[1/1.414] bg-muted rounded-lg animate-pulse" />
  }
);

export default function CertificateDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const certificate = CERTIFICATES.find((cert) => cert.id === id);

  useEffect(() => {
    if (certificate) {
      // Small delay to ensure the page starts rendering first
      const timer = setTimeout(() => {
        const link = document.createElement('a');
        link.href = `/certificates/${certificate.fileName}`;
        link.download = certificate.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [certificate]);

  if (!certificate) {
    return notFound();
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Certificates
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Certificate Preview */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-24">
              <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden mb-6">
                <PDFThumbnail fileName={certificate.fileName} />
              </div>
              
              <div className="flex flex-col gap-3">
                <Button asChild className="w-full py-6 text-base font-semibold">
                  <a
                    href={`/certificates/${certificate.fileName}`}
                    download={certificate.fileName}
                  >
                    <FileDown className="mr-2 h-5 w-5" />
                    Download Certificate
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full py-6 text-base">
                  <a
                    href={`/certificates/${certificate.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Open Original PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Certificate Info */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Award size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">Official Certificate</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              {certificate.name}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="p-2 rounded-md bg-background text-primary">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-tight mb-1">Issuer</p>
                  <p className="text-base font-semibold">{certificate.issuer}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="p-2 rounded-md bg-background text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-tight mb-1">Issued Date</p>
                  <p className="text-base font-semibold">{certificate.issueDate}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">About this Achievement</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {certificate.description}
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-lg">💡</span>
                    Note for Recruiters
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This certificate verifies the professional accomplishments and specialized skills acquired. 
                    You can download the PDF version for your records or view it directly in your browser. 
                    If you require further verification, please feel free to reach out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
