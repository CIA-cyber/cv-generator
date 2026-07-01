
import ReactPDF from '@react-pdf/renderer';
import CVTemplate from './components/CVTemplate';
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./data/profile.json', 'utf-8'));
const outputPath = './output/mi_cv.pdf';

ReactPDF.render(<CVTemplate data={data} />, outputPath).then(() => {
  console.log('¡PDF generado exitosamente en /output/mi_cv.pdf!');
});