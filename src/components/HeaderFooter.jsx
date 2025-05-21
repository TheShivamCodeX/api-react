function Header(){
    return(
        <>
        <div className=" py-4 bg-blue-300 shadow">
            <ul className="flex justify-center items-center gap-8 text-xl text-gray-800">
                <li><a href="/">Joke</a></li>
                <li><a href="/">Get Weather</a></li>
                <li><a href="/">Get Advice</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Games</a></li>
            </ul>
        </div>
        </>
    )
}

function Footer(){

}

export {Header , Footer}