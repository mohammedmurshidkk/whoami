export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  description: string;
  fileName: string;
  icon?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "employee-recognition",
    name: "Employee Recognition Certificate",
    issuer: "Kiebot Learning Solutions pvt",
    issueDate: "2025",
    description: "Recognition of outstanding performance and contributions",
    fileName: "Employee_Recognition_Certificate.pdf",
  },
  // Add more certificates here in the future
  // {
  //   id: "aws-certified",
  //   name: "AWS Certified Solutions Architect",
  //   issuer: "Amazon Web Services",
  //   issueDate: "2024",
  //   description: "Professional level certification",
  //   fileName: "AWS_Solutions_Architect.pdf",
  // },
];
