import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  icon: string;
  summary: string;
  publishedAt: string;
  image?: string;
};

export function getServicesFromJson(filePath) {
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return data.services;
}
