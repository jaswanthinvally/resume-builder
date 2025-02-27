import SmallButton from "@/components/SmallButton";
import Link from "next/link";

export default function signup () {
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <form className="flex flex-col justify-center">
                <h1 className="r text-2xl font-semibold my-2 text-center">Signup</h1>
                <label className="text-lg">email</label>
                <input className="" type="text" placeholder="enter you email"/><br/>
                <label className="text-lg">password</label>
                <input type="password" placeholder="enter you pasword"/><br/>
                <label className="text-lg">re enter password</label>
                <input type="password" placeholder="enter you re enter pasword"/><br/>
                <SmallButton name="submit" />
                <Link href="/signup"><h1 className="text-center">Register now !</h1></Link>
                

            </form>
        </div>
    )
}