function downloadPDF() {
    const element = document.getElementById('pdf-content');
    const opt = {
        margin: [1, 1, 3, 1],
        filename: 'Hoja_de_vida_Julian_buitrago.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2, useCors: true, scrolly: 0, windowWidth: document.body.scrollWidth,
            windowHeight: document.body.scrollHeight
        },
        jsPDF: { unit: 'mm', format: 'legal', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
    };
    html2pdf().set(opt).from(element).save();
}