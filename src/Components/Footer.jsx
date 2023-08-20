import '../Styles/Footer.css'

export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <button onClick={scrollToTop} className='footer-button'> Back to top </button>
        <div className='footer-container'>
            <div className='footer-list-container'>
                <p> Get to know us </p>
                <ul>
                    <li>Carrers</li>
                    <li>Blogs</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>

            <div className='footer-list-container'>
                <p> Let us help you </p>
                <ul>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates</li>
                    <li>Frequent questions</li>
                </ul>
            </div>

            <div className='footer-list-container'>
                <p> Follow us on : </p>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Telegram</li>
                    <li>News Letter</li>
                </ul>
            </div>
        </div>
        </>
    )
}
