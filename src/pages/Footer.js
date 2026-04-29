
export default function Footer() {

    return (
        <>
            <section className="bg-gray-800 py-12 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
                    <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest products and deals</p>
                </div>
                <div className="mx-auto text-center lg:ml-10 lg:text-start">
                    Photo used from{' '}
                    <a className="underline" target="_blank" rel="noreferrer" href="https://unsplash.com">
                        Unsplash.com
                    </a>
                </div>
            </section>
        </>
    )
}