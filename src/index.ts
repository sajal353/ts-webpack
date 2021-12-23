import './index.scss';

setInterval(() => {
    document.querySelector('.App')!.innerHTML = `
    <h1>${new Date().getHours() < 12 ? 'Good Morning' : 'Good Afternoon'}</h1>
    <p>It's currently ${new Date().toLocaleTimeString()} there.</hp>
`;
}, 1000);



