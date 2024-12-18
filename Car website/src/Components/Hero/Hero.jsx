import CarPng from "../../assets/car.png"
const Hero = () => {
    return (<main>
        <div className="bg-gradient-to-r from-primary to bg-primaryDark/90  ">  
        <div className="container">

            {/*Nav components Here */}

            {    /*Hero components Here */}
            <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
                {/* text content section  */}
                <div>
                <h1>Honda <br /> Sports EV</h1>
                </div>
               
                <button>
                    Explore
                </button>
                {/* image Section */}
                <div>
                    <img src={CarPng} alt="" />
                </div>
            </section>

        </div>
        </div>
    </main>

    )
}

export default Hero