interface ButtonInterface {
    name : string
}

export default function SmallButton ({name} : ButtonInterface) {
    return (
        <button className=" bg-sky-500 m-2 p-4 rounded py-2 font-semibold font-poppins">
            {name}
        </button>
    )
}