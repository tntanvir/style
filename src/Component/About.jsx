// import React from 'react'
// import TopBanner from './TopBanner'

// const About = () => {
//     return (
//         <div className='min-h-screen'>

//             <TopBanner title={"About"} />
//             <div className="bg-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">

//                         <p className="mt-4 text-lg  max-w-2xl mx-auto">
//                             Your one-stop destination for quality products. Discover why
//                             <strong> Style Swap</strong> is trusted by thousands of customers.
//                         </p>
//                     </div>

//                     <div className="space-y-16">
//                         {/* Section 1: Our Story */}
//                         <div className="flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-12">
//                             <div className="md:w-1/2">
//                                 <img
//                                     src="/src/assets/images/about/about.png"
//                                     alt="Our Story"
//                                     className="rounded-lg  w-full object-cover"
//                                 />
//                             </div>
//                             <div className="md:w-1/2">
//                                 <h2 className="text-3xl font-bold  mb-4 text-primary">Our Story</h2>
//                                 <p className="text-lg ">
//                                     Founded in <strong>2024</strong>, <strong>Style swap</strong> has grown from a small passion project
//                                     to a thriving business serving customers globally.  we’re committed to delivering high-quality products and
//                                     exceptional customer experiences.
//                                 </p>
//                                 <p className="mt-4 text-lg ">
//                                     What started as a small shop has blossomed into a full-scale operation, reaching customers
//                                     in <strong>Bangladesh/Dhaka</strong> and beyond. We take pride in making shopping easy, reliable,
//                                     and enjoyable for everyone.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Section 2: Our Mission */}
//                         <div className="flex flex-col-reverse md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-12">
//                             <div className="md:w-1/2">
//                                 <h2 className="text-3xl font-bold  mb-4">Our Mission</h2>
//                                 <p className="text-lg ">
//                                     At <strong>Style swap</strong>, our mission is simple: to provide top-tier products
//                                     at affordable prices while ensuring an outstanding customer experience. We focus on sustainability,
//                                     innovation, and giving our customers the best of what they need.
//                                 </p>
//                                 <p className="mt-4 text-lg ">
//                                     Whether it’s offering eco-friendly alternatives or curating the latest trends,
//                                     we’re committed to evolving with our customers' needs.
//                                 </p>
//                             </div>
//                             <div className="md:w-1/2">
//                                 <img
//                                     src="/src/assets/images/about/mision.png"
//                                     alt="Our Mission"
//                                     className="rounded-lg  w-full object-cover"
//                                 />
//                             </div>
//                         </div>

//                         {/* Section 3: Why Shop With Us? */}
//                         <div className="text-center">
//                             <h2 className="text-3xl font-bold  mb-6">Why Shop With Us?</h2>
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                                 <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold  mb-2">Wide Product Range</h3>
//                                     <p className="">
//                                         From [specific categories], we offer a diverse range of products to cater to all your needs.
//                                     </p>
//                                 </div>
//                                 <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold  mb-2">Customer-Centric</h3>
//                                     <p className="">
//                                         Your satisfaction is our priority. We provide excellent customer support at every step.
//                                     </p>
//                                 </div>
//                                 <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold  mb-2">Secure Shopping</h3>
//                                     <p className="">
//                                         Safe and secure transactions with trusted payment gateways to protect your data.
//                                     </p>
//                                 </div>
//                                 <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold  mb-2">Fast Delivery</h3>
//                                     <p className="">
//                                         We understand the excitement of receiving your order. That's why we offer fast, reliable shipping.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About




import React from 'react'
import TopBanner from './TopBanner'
import aboutImage from '/src/assets/images/about/about.png'
import missionImage from '/src/assets/images/about/mision.png'

const About = () => {
    return (
        <div className='min-h-screen'>

            <TopBanner title={"About"} />
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">

                        <p className="mt-4 text-lg  max-w-2xl mx-auto">
                            Your one-stop destination for quality products. Discover why
                            <strong> Style Swap</strong> is trusted by thousands of customers.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Section 1: Our Story */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-12">
                            <div className="md:w-1/2">
                                <img
                                    src={aboutImage}
                                    alt="Our Story"
                                    className="rounded-lg  w-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold  mb-4 text-primary">Our Story</h2>
                                <p className="text-lg ">
                                    Founded in <strong>2024</strong>, <strong>Style swap</strong> has grown from a small passion project
                                    to a thriving business serving customers globally.  we’re committed to delivering high-quality products and
                                    exceptional customer experiences.
                                </p>
                                <p className="mt-4 text-lg ">
                                    What started as a small shop has blossomed into a full-scale operation, reaching customers
                                    in <strong>Bangladesh/Dhaka</strong> and beyond. We take pride in making shopping easy, reliable,
                                    and enjoyable for everyone.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Our Mission */}
                        <div className="flex flex-col-reverse md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold  mb-4">Our Mission</h2>
                                <p className="text-lg ">
                                    At <strong>Style swap</strong>, our mission is simple: to provide top-tier products
                                    at affordable prices while ensuring an outstanding customer experience. We focus on sustainability,
                                    innovation, and giving our customers the best of what they need.
                                </p>
                                <p className="mt-4 text-lg ">
                                    Whether it’s offering eco-friendly alternatives or curating the latest trends,
                                    we’re committed to evolving with our customers' needs.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src={missionImage}
                                    alt="Our Mission"
                                    className="rounded-lg  w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Section 3: Why Shop With Us? */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold  mb-6">Why Shop With Us?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold  mb-2">Wide Product Range</h3>
                                    <p className="">
                                        From [specific categories], we offer a diverse range of products to cater to all your needs.
                                    </p>
                                </div>
                                <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold  mb-2">Customer-Centric</h3>
                                    <p className="">
                                        Your satisfaction is our priority. We provide excellent customer support at every step.
                                    </p>
                                </div>
                                <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold  mb-2">Secure Shopping</h3>
                                    <p className="">
                                        Safe and secure transactions with trusted payment gateways to protect your data.
                                    </p>
                                </div>
                                <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold  mb-2">Fast Delivery</h3>
                                    <p className="">
                                        We understand the excitement of receiving your order. That's why we offer fast, reliable shipping.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
