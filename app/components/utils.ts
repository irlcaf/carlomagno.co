import fs from 'fs';
export function getNavBarItems(filePath) {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
  
    return data.navbar;
  }
  