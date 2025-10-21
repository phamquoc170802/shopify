(function() {
    const overlay = document.createElement('div');
    const spinner = document.createElement('div');
    const text = document.createElement('p');

    overlay.id = 'temp-loader';

    const styles = `
        #temp-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        #temp-loader .spinner {
            border: 8px solid #f3f3f3;
            border-top: 8px solid #3498db;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1.5s linear infinite;
        }

        #temp-loader p {
            margin-top: 20px;
            font-size: 18px;
            color: #555;
            font-family: Arial, sans-serif;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    spinner.className = 'spinner';
    overlay.appendChild(spinner);
    overlay.appendChild(text);

    function showLoader() {
        if (document.body) {
            document.body.appendChild(overlay);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showLoader);
    } else {
        showLoader();
    }

    const thoiGianCho = 10000; 

    setTimeout(function() {
        window.location.href = '/'; 
    }, thoiGianCho);

})();
