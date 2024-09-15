function generateVercelUrl(startPoint: string): string {
    const vercelBaseUrl = 'https://hospital-w-w2q7.vercel.app/';
    const params = new URLSearchParams();

    // Set the 'start' parameter to the start point
    params.set('start', startPoint);

    // Construct the final Vercel URL with parameters
    const vercelUrl = `${vercelBaseUrl}?${params.toString()}`;

    return vercelUrl;
}

function generateQRCode(url: string, qrImgEl: HTMLImageElement): void {
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;

    fetch(apiUrl)
        .then(response => response.blob())
        .then(blob => {
            const qrUrl = URL.createObjectURL(blob);
            qrImgEl.src = qrUrl;
        })
        .catch(error => console.error('Error generating QR code:', error));
}

// Define the start point
const startPoint = 'Reception';
const vercelUrl = generateVercelUrl(startPoint);

// Find the QR image element in the DOM
const qrImgEl = document.getElementById('qr') as HTMLImageElement;
if (qrImgEl) {
    generateQRCode(vercelUrl, qrImgEl);
}

