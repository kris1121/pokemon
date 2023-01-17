function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async (...args) => {
    await sleep(1000);
    return fetch(...args).then((res) => res.json())
}