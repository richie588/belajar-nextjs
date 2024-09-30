export const getData= async(url : string) => {
    // const res = await fetch ("https://fakestoreapi.com/products");
    const res = await fetch(url,{
            cache: "no-store",
            next: {
                // revalidate:30,
                tags: ['product'],
            },
        });

    if (!res.ok) {
        throw new Error("failded to req data");
    }
    return res.json();
}