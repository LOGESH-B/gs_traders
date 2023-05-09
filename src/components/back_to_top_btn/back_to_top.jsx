import './back_to_top.css'
export default function Back() {
    const scrollToTopBtn = document.getElementById("go-to-top-btn");
    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            // If user scrolls more than 20px from top, show the button
            if (window.pageYOffset >20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });


        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    return (
        <>
            <div className="go-to-top-btn">
    
                <button class="block-button-1">^</button>
            </div>

        </>

    )
}