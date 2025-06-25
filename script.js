function downloadPDF(){
    const element = document.querySelector('.container-lg');
    const opt = {
        margin: 0,
        filename: 'Hoja_de_vida_Julian_buitrago.pdf',
        image: { type: 'jpeg', quality:1},
        html2canvas: {scale:2, useCors:true,scrolly:0},
        jsPDF: {unit: 'mm',format:'legal',orientation:'portrait'},
        pagebreak: {mode: ['css','legacy']}
    };
    html2pdf().set(opt).from(element).save();
}