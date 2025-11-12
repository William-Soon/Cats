export const fetchCatImages = async (count: number): Promise<string[]> => {
    const response = await fetch(`https://cataas.com/cat?json=true&count=${count}`);
    const data = await response.json();
    return data.map((cat: { url: string }) => `https://cataas.com${cat.url}`);
};