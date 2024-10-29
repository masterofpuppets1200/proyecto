import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-informes-profesor',
  templateUrl: './informes-profesor.page.html',
  styleUrls: ['./informes-profesor.page.scss'],
})
export class InformesProfesorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generatePDF() {
    // Crea una instancia de jsPDF
    const pdf = new jsPDF();

    // Añade el contenido al PDF
    pdf.text('Informe de Asistencia', 10, 10);
    pdf.text('Curso: Desarrollo Web', 10, 20);
    pdf.text('Fecha: 23 de octubre de 2024', 10, 30);

    // Guarda el archivo con un nombre específico
    pdf.save('informe.pdf');
  }

  generateWord() {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun('Informe de Asistencia'),
              new TextRun({ text: 'Curso: Desarrollo Web', bold: true }),
              new TextRun({ text: 'Fecha: 23 de octubre de 2024', bold: true }),
            ],
          }),
        ],
      }],
    });

    Packer.toBlob(doc).then((blob) => {
      this.saveAs(blob, 'informe.docx');
    });
  }

  private saveAs(blob: Blob, filename: string) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  generateExcel() {
    const data = [
      { Curso: 'Desarrollo Web', Fecha: '23 de octubre de 2024' },
      
    ];

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Informe');

   
    XLSX.writeFile(workbook, 'informe.xlsx');
  }
}

