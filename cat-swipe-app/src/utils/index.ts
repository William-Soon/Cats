export const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
};

export const formatCatImageUrl = (url: string) => {
    return url.includes('http') ? url : `https://cataas.com/cat/${url}`;
};