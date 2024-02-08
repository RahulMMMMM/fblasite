import nyc from '../images/nyc.webp';
import atl from '../images/atlanta.jpg';
import seattle from '../images/seattle.jpg';


export default function Home(){

    return(
        <div className="text-white h-full flex flex-col items-center justify-start bg-gradient-to-t from-[#00000f] from-80% to-[#0c4f8c] p-8">
            <div className="flex flex-col justify-center items-center h-3/5 w-2/3">
                <h1 className="text-7xl m-6">Where Imagination Meets Reality</h1>
                <p className="text-center text-l w-3/4">Welcome to Plato Inc., a cutting-edge mixed-reality company that thrives on 
                    pushing the boundaries of what's possible with virtual and augmented reality. 
                    At Plato, we believe in the power of imagination to transform the world, 
                    and we're on a mission to create immersive experiences that blur the lines between the real and the virtual.</p>
            </div>
            <div className="flex flex-col items-center">
            <h1 className="text-3xl">Our Offices</h1>
            <div className="grid grid-cols-3 gap-[100px] px-[100px] my-[20px] pb-[80px]">
                <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden h-[400px]">
                    <img src={atl} alt="Atlanta Office" className="w-auto h-full object-cover" />
                </div>
                <p className="mt-2 text-center text-xl">Atlanta</p>
                </div>
                <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden h-[400px]">
                    <img src={nyc} alt="New York City Office" className="w-auto h-full object-cover" />
                </div>
                <p className="mt-2 text-center text-xl">New York City</p>
                </div>
                <div className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden h-[400px]">
                    <img src={seattle} alt="Seattle Office" className="w-auto h-full object-cover" />
                </div>
                <p className="mt-2 text-center text-xl">Seattle</p>
                </div>
            </div>
            </div>

        </div>
    )
}