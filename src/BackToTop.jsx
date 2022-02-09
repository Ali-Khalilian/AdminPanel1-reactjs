const BackToTop = () => {


    const scroll = document.querySelector(".backTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scroll.classList.add("show");
        } else {
            scroll.classList.remove("show");
        }
    });

    scroll.addEventListener("click", () => {
        if (scroll.classList.contains("show")) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });




    return (
        <button type="button" className="btn-dark text-light rounded-circle backTop">Top</button>
    )
};

export default BackToTop;