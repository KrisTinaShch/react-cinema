import bladeRanner from "../../assets/Blade Runner 2049(2).jpg";
function Banner() {
    return (
        <>
            <div className="favorites__banner">
                <div className="gradient__overlay"></div>
                <img src={bladeRanner} alt="" />
            </div>

        </>
    )
}

export default Banner