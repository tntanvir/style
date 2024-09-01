import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
const HomeLogin = () => {

    const [data, setData] = useState({ email: "", name: "", password: "" })
    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    return (
        <div className='hidden hLogin md:h-[26rem] h-full  md:flex flex-col  md:flex-row items-center justify-around pt-5 px-2'>
            <div>
                <h1 className="text-xl md:text-start text-center text-primary">save the day</h1>
                <h1 className="md:text-3xl text-2xl md:text-start text-center text-white">Join on Day Long Free Workshop for</h1>
                <h1 className="md:text-3xl text-2xl md:text-start text-center text-white">Advance <span className="text-primary">Mastering </span>On Sales</h1>
                <p className="text-xl md:text-start text-center text-white">Limited Time Offer! Hurry Up</p>
            </div>

            <Card color="transparent" className="overflow-hidden h-96 relative py-5 md:px-2">
                <Typography variant="h4" color="black" className="text-black z-30">
                    Sign Up
                </Typography>

                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white from-5% -z-0 " />
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
                    <div className="mb-1 flex flex-col gap-2 px-1">
                        <Typography variant="h6" color="black" className="-mb-3 text-black z-30">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            name="name"
                            onChange={change}
                            value={data.name}
                            placeholder="name@mail.com"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900  text-black z-30"
                            labelProps={{
                                className: "before:content-none after:content-none text-black z-30",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-black z-30">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            name="email"
                            value={data.email}
                            onChange={change}

                            placeholder="name@mail.com"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 text-black z-30"
                            labelProps={{
                                className: "before:content-none after:content-none text-black z-30",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-black z-30">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={change}
                            size="lg"
                            placeholder="********"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 text-black z-30"
                            labelProps={{
                                className: "before:content-none after:content-none text-black z-30",
                            }}
                        />
                    </div>
                    <div className="w-full  flex justify-center">
                        <Button className="mt-6  z-30 bg-primary w-1/2 text-black" >
                            sign up
                        </Button>
                    </div>
                    <Typography color="gray" className="mt-4 text-center font-normal text-black z-30">
                        Already have an account?{" "}
                        <a href="#" className="font-medium  text-black z-30">
                            Sign In
                        </a>
                    </Typography>
                </form>

            </Card>

        </div >

    )
}

export default HomeLogin