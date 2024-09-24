type DetailProductPageProps = { params: { slug: string[] } }

export default function DetailProductPage(props: DetailProductPageProps) {
    const { params } = props;

    return (
        <div>
            <h1>{params.slug ? "detail Product Page" : "product Page"}</h1>
            {params.slug && (
                <>
                    <p> category : {params.slug[0]}</p>
                    <p> gender : {params.slug[1]}</p>
                    <p> code : {params.slug[2]}</p>
                </>
            )
            }
        </div>
    )
}